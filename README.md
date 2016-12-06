# Personal Angular Notes

## Architecture 
![Angular Architecture ](https://angular.io/resources/images/devguide/architecture/overview2.png "Optional title")

## Component
Annotations/Decorator add some metadata to our class. Why metadata? Simply it gives a meaning to our class.


## Services 
Services are injected to Components.

Once Services are injected, a component can then access the methods inside Services.


## One way data binding


## Two way data binding (using ngModel)
![two way data Binding ](http://www.angulartypescript.com/wp-content/uploads/2016/02/angular-2-ng-model.png "two way data Binding")

<div class="form-group">
  <label for="name">Name</label>
  <input type="text" class="form-control" id="name"
         required
         [(ngModel)]="model.name" name="name">
</div>
Here in above example we have assigned model.name value to the ngModel. 

ngControl directive ensure the tracking of: the state change and validation of data within all form elements (html form element like input). We can call an element a control. Control = Element .

ngControl is used internally by all forms.

Each input element has an id property that is used by the label element's for attribute to match the label to its input control.
Each input element has a name property that is required by Angular Forms to register the control with the form.

