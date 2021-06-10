import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilterSchema } from 'src/app/shared/form/filter-schema';
import { TestimonyListService } from 'src/app/testimony/list/testimony-list.service';
import { TestimonyModel } from 'src/app/testimony/testimony-model';

@Component({
  selector: 'app-testimony-list-filter',
  templateUrl: './testimony-list-filter.component.html',
})
export class TestimonyListFilterComponent implements OnInit {
  form: FormGroup;
  schema: FilterSchema;
  expanded: boolean = false;

  constructor(
    private service: TestimonyListService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
    this.doFilter();
  }

  get fields() {
    return TestimonyModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  doToggleExpanded() {
    this.expanded = !this.expanded;
  }

  doFilter() {
    if (!this.form.valid) {
      return;
    }

    this.expanded = false;
    const values = this.schema.cast(this.form.value);
    return this.service.doFetch(values);
  }

  buildForm() {
    const { filter } = this.service;
    const params = this.route.snapshot.queryParams;
    this.form = this.schema.buildForm(filter, params);
  }

  doReset() {
    this.form = this.schema.buildForm();
    this.doFilter();
    this.expanded = false;
  }

  private buildSchema() {
    this.schema = new FilterSchema(
      [
        this.fields.category,
        this.fields.title,
        this.fields.region,
        this.fields.testimonyType,
        this.fields.status,
        this.fields.priority,
        this.fields.assignedTo,
        this.fields.anonymous,
        this.fields.transferTo,
      ],
      this.formBuilder,
    );
  }
}
