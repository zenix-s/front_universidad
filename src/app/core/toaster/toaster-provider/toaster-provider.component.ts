import {
  Component,
  OnDestroy,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { ToastComponent } from './toast/toast.component';
import { ToasterService } from '../service/toaster.service';
import { Toaster } from '../toaster.entity';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-toaster-provider',
  standalone: true,
  imports: [ToastComponent],
  templateUrl: './toaster-provider.component.html',
  styleUrl: './toaster-provider.component.css',
})
export class ToasterProviderComponent implements OnInit, OnDestroy {
  toasterService = inject(ToasterService);

  toasts: WritableSignal<Toaster[]> = signal<Toaster[]>([]);
  toastSubscription!: Subscription;

  private ngUnsubscribe = new Subject<void>();

  ngOnInit(): void {
    this.toasterService.toaster$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((toasts) => {
        this.toasts.set(toasts);
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
