import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChoosefestivalPage } from './choosefestival.page';

describe('ChoosefestivalPage', () => {
  let component: ChoosefestivalPage;
  let fixture: ComponentFixture<ChoosefestivalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosefestivalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoosefestivalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
