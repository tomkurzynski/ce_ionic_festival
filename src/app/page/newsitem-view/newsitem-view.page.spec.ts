import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsitemViewPage } from './newsitem-view.page';

describe('NewsitemViewPage', () => {
  let component: NewsitemViewPage;
  let fixture: ComponentFixture<NewsitemViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsitemViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsitemViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
