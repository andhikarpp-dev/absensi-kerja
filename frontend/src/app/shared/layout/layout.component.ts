import { Component, inject, OnInit, OnDestroy, AfterViewInit, computed } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit, OnDestroy, AfterViewInit {
  auth   = inject(AuthService);
  router = inject(Router);

  /** true jika role ADMIN atau PEMILIK */
  readonly isAdminOrPemilik = computed(() =>
    ['ADMIN', 'PEMILIK'].includes(this.auth.currentUser()?.role ?? '')
  );

  /** true jika role KARYAWAN biasa */
  readonly isKaryawan = computed(() =>
    this.auth.currentUser()?.role === 'KARYAWAN'
  );

  /** true jika role PEMILIK */
  readonly isPemilik = computed(() =>
    this.auth.currentUser()?.role === 'PEMILIK'
  );

  private routerSub!: Subscription;

  ngOnInit(): void {
    this.routerSub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.initPlugins());
  }

  ngAfterViewInit(): void {
    this.initPlugins();
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  private initPlugins(): void {
    setTimeout(() => {
      const $ = (window as any).$;
      if (!$) return;

      // --- MetisMenu (sidebar accordion) ---
      if ($('#menu').length && $.fn.metisMenu) {
        $('#menu').metisMenu();
      }

      // --- Toggle sidebar buka/tutup via tombol arrow ---
      $('.toggle-icon').off('click').on('click', function () {
        if ($('.wrapper').hasClass('toggled')) {
          $('.wrapper').removeClass('toggled');
          $('.sidebar-wrapper').unbind('hover');
        } else {
          $('.wrapper').addClass('toggled');
          $('.sidebar-wrapper').hover(
            () => $('.wrapper').addClass('sidebar-hovered'),
            () => $('.wrapper').removeClass('sidebar-hovered')
          );
        }
      });

      // --- Tombol hamburger mobile ---
      $('.mobile-toggle-menu').off('click').on('click', function () {
        $('.wrapper').toggleClass('toggled');
      });

      // --- Perfect Scrollbar pada sidebar ---
      if ($('.sidebar-wrapper').length && (window as any).PerfectScrollbar) {
        new (window as any).PerfectScrollbar('.header-notifications-list');
      }

      // --- Back to top ---
      $(window).off('scroll.btt').on('scroll.btt', function () {
        ($(window) as any).scrollTop() > 300
          ? $('.back-to-top').fadeIn()
          : $('.back-to-top').fadeOut();
      });
      $('.back-to-top').off('click').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
      });

      // --- Highlight active menu item & expand parent ---
      const currentUrl = window.location.href;
      $('.metismenu li a').each(function (this: HTMLElement) {
        if ((this as HTMLAnchorElement).href === currentUrl) {
          $(this).parent('li').addClass('mm-active');
          $(this).closest('ul').addClass('mm-show');
          $(this).closest('ul').parent('li').addClass('mm-active');
        }
      });

    }, 100);
  }

  logout(): void {
    this.auth.logout();
  }
}


