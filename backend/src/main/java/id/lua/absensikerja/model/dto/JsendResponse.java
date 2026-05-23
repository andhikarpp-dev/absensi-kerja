package id.lua.absensikerja.model.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;

/**
 * JSend-compliant response wrapper.
 * Spec: <a href="https://github.com/omniti-labs/jsend">JSend</a>
 *
 * <ul>
 *   <li><b>success</b> – All went well, data contains the result.</li>
 *   <li><b>fail</b>    – Problem with submitted data, data contains validation details.</li>
 *   <li><b>error</b>   – Server-side error, message describes it.</li>
 * </ul>
 */
@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class JsendResponse<T> {

    private String  status;
    private T       data;
    private String  message;
    private Integer code;

    private JsendResponse() {}

    /** 200 OK – everything worked */
    public static <T> JsendResponse<T> success(T data) {
        JsendResponse<T> r = new JsendResponse<>();
        r.status = "success";
        r.data   = data;
        return r;
    }

    /** 400 Bad Request – client-side input validation failed */
    public static <T> JsendResponse<T> fail(T data) {
        JsendResponse<T> r = new JsendResponse<>();
        r.status = "fail";
        r.data   = data;
        return r;
    }

    /** 500 Internal Server Error – server-side error */
    public static <T> JsendResponse<T> error(String message) {
        JsendResponse<T> r = new JsendResponse<>();
        r.status  = "error";
        r.message = message;
        return r;
    }

    /** 500 with optional error code and debug data */
    public static <T> JsendResponse<T> error(String message, Integer code, T data) {
        JsendResponse<T> r = new JsendResponse<>();
        r.status  = "error";
        r.message = message;
        r.code    = code;
        r.data    = data;
        return r;
    }
}
