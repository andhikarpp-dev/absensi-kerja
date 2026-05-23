package id.lua.absensikerja.controller;

import id.lua.absensikerja.model.dto.JsendResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.server.ResponseStatusException;

import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Global exception handler – converts errors to JSend format.
 * Spec: <a href="https://github.com/omniti-labs/jsend">JSend</a>
 */
@RestControllerAdvice
public class GlobalExceptionHandler {

    /**
     * Bean Validation errors (@Valid) → JSend "fail"
     * { "status": "fail", "data": { "fieldName": "pesan error", ... } }
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<JsendResponse<Map<String, String>>> handleValidation(
            MethodArgumentNotValidException ex) {

        Map<String, String> errors = new LinkedHashMap<>();
        ex.getBindingResult().getFieldErrors()
                .forEach(fe -> errors.put(fe.getField(), fe.getDefaultMessage()));

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(JsendResponse.fail(errors));
    }

    /**
     * ResponseStatusException (404 Not Found, 409 Conflict, …) → JSend "fail"
     * { "status": "fail", "data": { "message": "..." } }
     */
    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<JsendResponse<Map<String, String>>> handleResponseStatus(
            ResponseStatusException ex) {

        Map<String, String> data = Map.of("message", ex.getReason() != null ? ex.getReason() : ex.getMessage());

        return ResponseEntity
                .status(ex.getStatusCode())
                .body(JsendResponse.fail(data));
    }

    /**
     * Everything else → JSend "error"
     * { "status": "error", "message": "..." }
     */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<JsendResponse<Void>> handleGeneric(Exception ex) {
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(JsendResponse.error("Terjadi kesalahan internal: " + ex.getMessage()));
    }
}
