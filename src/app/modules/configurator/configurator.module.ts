import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguratorRoutingModule } from './configurator-routing.module';
import { StepSelectorComponent } from './components/step-selector/step-selector.component';
import { ModelAndColorComponent } from './components/model-and-color/model-and-color.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModelsProxyService } from './services/models-proxy.service';
import { ConfigOptionsProxyService } from './services/config-options-proxy.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfiguratorRoutingModule,
    StepSelectorComponent,
    ModelAndColorComponent,
    HttpClientModule,
  ],
  providers: [HttpClient, ModelsProxyService, ConfigOptionsProxyService],
})
export class ConfiguratorModule {}
