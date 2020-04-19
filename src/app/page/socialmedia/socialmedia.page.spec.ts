import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SocialmediaPage } from './socialmedia.page';

describe('SocialmediaPage', () => {
  let component: SocialmediaPage;
  let fixture: ComponentFixture<SocialmediaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialmediaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SocialmediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
