import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApxSideMenu } from './apx-side-menu';
import { provideRouter } from '@angular/router';

describe('ApxSideMenu', () => {
  let component: ApxSideMenu;
  let fixture: ComponentFixture<ApxSideMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApxSideMenu ],
      providers:[provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ApxSideMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSingIn when button is clicked', () => {
    vi.spyOn(component.onSignIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false);

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-login]'
    ) as HTMLButtonElement;

    expect(button).toBeTruthy();

    button.click();

    expect(component.onSignIn.emit).toHaveBeenCalled();
  });

  it('should call onSignOut when button is clicked', () => {
    vi.spyOn(component.onSignOut, 'emit');
    fixture.componentRef.setInput('isAuthenticated', true);

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-logout]'
    ) as HTMLButtonElement;

    expect(button).toBeTruthy();

    button.click();

    expect(component.onSignOut.emit).toHaveBeenCalled();
  });
});
