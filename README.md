# angularx.cssLab1-npm Project 



## TARGET 

Angular with ngx-bootstrap.

 

![img](https://ultering.com/it4us/wp-content/uploads/2021/01/angular-cssLab1-npm-ngx.jpg)

**1. Please, perform the same routine used for method 1 or 2.**



**2. Install ngx-bootstrap.**

npm install ngx-bootstrap --save
or
npm i ngx-bootstrap

**NOTES:**

**a**. ng2-bootstrap is the errlier name for ngx-bootstrap.

**b**. Any doubt about the differences between the commands above?
For this example, using npm 6.X, they are equivalents.

More information?
[Specifying dependencies and devDependencies in a package.json file](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file)
[What is the --save option for npm install?](https://stackoverflow.com/questions/19578796/what-is-the-save-option-for-npm-install)

**c**. The installation may returns some warns like this:
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: ...

Go ahead.
If desired, follow its instructions. Example:
found 4 vulnerabilities (3 low, 1 high)
run `npm audit fix` to fix them, or `npm audit` for details
Be prepared, "audit fix" may take some time.



**3. Decide the components you wish to use.**

Check [ngx-bootstrap documentation](https://valor-software.com/ngx-bootstrap/#/documentation).

Following the documentation, pick your choices.



**4. Next, an example with dropdowns.**
Go to the [dropdown documentation](https://valor-software.com/ngx-bootstrap/#/dropdowns) page.

The documentation shows the configuration required (italic).



**5. Edit app.module.ts and set the imports.**
Example:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// RECOMMENDED
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)
//import { BsDropdownModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

**NOTES:**

**a**. The .forRoot() method loads each module making available all resources.

**b**. Alternatively, imports may be declared in a specific module if desired.

 

**6. Adding the dropdown button to the html page.**
Edit "app.component.html" and add an extra row to get a better visualization.

```
	...
	<div class="container">
		<div class="row" style="margin-bottom: 40px;">
			<div class="col-md-12">
			</div>
		</div>
```

 

**7. Copy the code from the [documentation](https://valor-software.com/ngx-bootstrap/#/dropdowns) inside the new row:**

```
	<div class="btn-group" dropdown>
	  <button id="button-basic" dropdownToggle type="button" class="btn btn-primary dropdown-toggle"
			  aria-controls="dropdown-basic">
		Button dropdown <span class="caret"></span>
	  </button>
	  <ul id="dropdown-basic" *dropdownMenu class="dropdown-menu"
		  role="menu" aria-labelledby="button-basic">
		<li role="menuitem"><a class="dropdown-item" href="#">Action</a></li>
		<li role="menuitem"><a class="dropdown-item" href="#">Another action</a></li>
		<li role="menuitem"><a class="dropdown-item" href="#">Something else here</a></li>
		<li class="divider dropdown-divider"></li>
		<li role="menuitem"><a class="dropdown-item" href="#">Separated link</a>
		</li>
	  </ul>
	</div>
```

 

**8. Set inside the "div column":**

```
	<div class="row" style="margin-bottom: 40px;">
		<div class="col-md-12">
			<div class="btn-group" dropdown>
			  <button id="button-basic" dropdownToggle type="button" class="btn btn-primary dropdown-toggle"
					  aria-controls="dropdown-basic">
				Button dropdown <span class="caret"></span>
			  </button>
			  <ul id="dropdown-basic" *dropdownMenu class="dropdown-menu"
				  role="menu" aria-labelledby="button-basic">
				<li role="menuitem"><a class="dropdown-item" href="#">Action</a></li>
				<li role="menuitem"><a class="dropdown-item" href="#">Another action</a></li>
				<li role="menuitem"><a class="dropdown-item" href="#">Something else here</a></li>
				<li class="divider dropdown-divider"></li>
				<li role="menuitem"><a class="dropdown-item" href="#">Separated link</a>
				</li>
			  </ul>
			</div>
		</div>
	</div>
```

 

**9. Start the server.**
cd $PROJECT_ROOT
ng serve

 

**10. Point on browser:**
http://localhost:4200/

![img](https://ultering.com/it4us/wp-content/uploads/2021/01/angular_ngx-bootstrap_dropdown_closed.jpg)

![img](https://ultering.com/it4us/wp-content/uploads/2021/01/angular_ngx-bootstrap_dropdown_opened.jpg)