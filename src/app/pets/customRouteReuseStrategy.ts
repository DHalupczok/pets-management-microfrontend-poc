import {
  ActivatedRouteSnapshot,
  BaseRouteReuseStrategy,
  DetachedRouteHandle,
  RouteReuseStrategy,
} from '@angular/router';

export class CustomRouteReuseStrategy extends BaseRouteReuseStrategy {
  private storedRoutes = new Map<string, DetachedRouteHandle>();
  private detachPages: string[] = ["/", '/pets/dogs', '/pets/cats', '/pets/rats'];

  override shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // console.log(window.location.pathname)
    console.log("shouldDetach", route);
    if (this.detachPages.indexOf((route as any)._routerState.url) != -1) {
      return true
    } else {
      return false;
    }
  }

  override store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    console.warn((route as any)._routerState.url)
    console.log(route.routeConfig!.path)
    console.log("store", route);
    this.storedRoutes.set((route as any)._routerState.url, handle);
  }

  override shouldAttach(route: ActivatedRouteSnapshot): boolean {
    console.log('shouldAttach', route)
    return !!this.storedRoutes.get((route as any)._routerState.url);
  }

  override retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    if (!route.component) return null;
    return this.storedRoutes.get((route as any)._routerState.url) as DetachedRouteHandle;
  }
}
