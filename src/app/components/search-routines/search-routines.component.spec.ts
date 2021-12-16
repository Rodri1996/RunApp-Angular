import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SearchRoutinesComponent } from './search-routines.component'

describe('SearchRoutinesComponent', () => {
  let component: SearchRoutinesComponent
  let fixture: ComponentFixture<SearchRoutinesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRoutinesComponent ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRoutinesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
