# Angular 11: Reactive Forms Demystified

https://app.pluralsight.com/library/courses/ng-conf-19-reactive-forms/table-of-contents

## Start

- add ReactiveFormsModule in module imports[]

## Building Blocks

- FormControl (inherits from AbstractControl)
- FormGroup (inherits from AbstractControl)
- FormArray (inherits from AbstractControl)

### FormControl

- used to bind to individual inputs in template
- formControl property

### FormGroup

- groups FormControls
- HTML Form Elements
- validate together
- object based API for acesssing grouped controls

### FormArray

- similar to FormGroup
- provides array like API for accessing grouped controls
- used to aggregate & group controls
- can contain a mix of FormGrooup and FormControl

## Demo

- value change
- build-in validation
- composition
- custom validation
- async validation
- http://appear.in/saniyusuf

## State

- pristine: initial value has not been changed (!dirty)
- dirty: initial value has been changed (!pristine)
- touched: lost foucus: show error messages on touched control only (!untouched)
- untouched: never touched or can have the focus now but lostfocus not happened yet (!touched)

## Validators

- all validators must be fulfilled
- tipps: 
          - don't show errors at start
          - show 1 error at the time
- validators for valdidation form
- async validators 
          http://zippopotam.us/ 
          http://api.zippopotam.us/CH/8000 (Zurich)
          https://github.com/zippopotamus/zippopotamus

