import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { GdprPage } from './gdpr.page';

describe('GdprPage', () => {
  let component: GdprPage;
  let fixture: ComponentFixture<GdprPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GdprPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GdprPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
