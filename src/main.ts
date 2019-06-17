import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/no_auth/app.module';
import {AuthModule} from './app/auth/auth.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AuthModule);