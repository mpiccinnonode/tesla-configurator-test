import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationImageComponent } from './configuration-image.component';

describe('ConfigurationImageComponent', () => {
  let component: ConfigurationImageComponent;
  let fixture: ComponentFixture<ConfigurationImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigurationImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
