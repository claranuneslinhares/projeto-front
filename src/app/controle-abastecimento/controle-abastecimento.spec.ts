import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleAbastecimento } from './controle-abastecimento';

describe('ControleAbastecimento', () => {
  let component: ControleAbastecimento;
  let fixture: ComponentFixture<ControleAbastecimento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControleAbastecimento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleAbastecimento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
