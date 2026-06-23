import * as _angular_core from '@angular/core';

declare enum TitleColor {
    red = "text-red-500",
    green = "text-green-500",
    blue = "text-blue-500",
    purple = "text-blue-500"
}
declare class ApxSideMenu {
    isAuthenticated: _angular_core.InputSignal<boolean>;
    titleColor: _angular_core.InputSignal<TitleColor>;
    onSignOut: _angular_core.OutputEmitterRef<void>;
    onSignIn: _angular_core.OutputEmitterRef<void>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ApxSideMenu, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<ApxSideMenu, "lib-apx-side-menu", never, { "isAuthenticated": { "alias": "isAuthenticated"; "required": false; "isSignal": true; }; "titleColor": { "alias": "titleColor"; "required": false; "isSignal": true; }; }, { "onSignOut": "onSignOut"; "onSignIn": "onSignIn"; }, never, never, true, never>;
}

export { ApxSideMenu, TitleColor };
//# sourceMappingURL=apx-side-menu.d.ts.map
