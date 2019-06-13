(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipes-recipes-module"],{

/***/ "./src/app/recipes/recipe-item/recipe-item.component.html":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-item/recipe-item.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item  [routerLink]=\"['./', recipe.id]\">\n  <ion-avatar slot=\"start\">\n    <ion-img [src]=\"recipe.imageUrl\">\n    </ion-img>\n  </ion-avatar>\n  <ion-title>\n    {{recipe.title}}\n  </ion-title>\n</ion-item>"

/***/ }),

/***/ "./src/app/recipes/recipe-item/recipe-item.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-item/recipe-item.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWl0ZW0vcmVjaXBlLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/recipes/recipe-item/recipe-item.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-item/recipe-item.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function() { return RecipeItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipeItemComponent = /** @class */ (function () {
    function RecipeItemComponent() {
    }
    RecipeItemComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RecipeItemComponent.prototype, "recipe", void 0);
    RecipeItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-item',
            template: __webpack_require__(/*! ./recipe-item.component.html */ "./src/app/recipes/recipe-item/recipe-item.component.html"),
            styles: [__webpack_require__(/*! ./recipe-item.component.scss */ "./src/app/recipes/recipe-item/recipe-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipeItemComponent);
    return RecipeItemComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.module.ts":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.module.ts ***!
  \*******************************************/
/*! exports provided: RecipesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesPageModule", function() { return RecipesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recipes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes.page */ "./src/app/recipes/recipes.page.ts");
/* harmony import */ var _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipe-item/recipe-item.component */ "./src/app/recipes/recipe-item/recipe-item.component.ts");








var routes = [
    {
        path: '',
        component: _recipes_page__WEBPACK_IMPORTED_MODULE_6__["RecipesPage"]
    }
];
var RecipesPageModule = /** @class */ (function () {
    function RecipesPageModule() {
    }
    RecipesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_recipes_page__WEBPACK_IMPORTED_MODULE_6__["RecipesPage"], _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_7__["RecipeItemComponent"]]
        })
    ], RecipesPageModule);
    return RecipesPageModule;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.page.html":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Recipes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <app-recipe-item *ngFor=\"let recipe of recipes\" [recipe]=\"recipe\"></app-recipe-item>\n    \n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/recipes/recipes.page.scss":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipes.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/recipes/recipes.page.ts":
/*!*****************************************!*\
  !*** ./src/app/recipes/recipes.page.ts ***!
  \*****************************************/
/*! exports provided: RecipesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesPage", function() { return RecipesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes.service */ "./src/app/recipes/recipes.service.ts");



var RecipesPage = /** @class */ (function () {
    function RecipesPage(recipesService) {
        this.recipesService = recipesService;
    }
    RecipesPage.prototype.ngOnInit = function () {
        this.recipes = this.recipesService.getAllRecipes();
    };
    RecipesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipes',
            template: __webpack_require__(/*! ./recipes.page.html */ "./src/app/recipes/recipes.page.html"),
            styles: [__webpack_require__(/*! ./recipes.page.scss */ "./src/app/recipes/recipes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_recipes_service__WEBPACK_IMPORTED_MODULE_2__["RecipesService"]])
    ], RecipesPage);
    return RecipesPage;
}());



/***/ })

}]);
//# sourceMappingURL=recipes-recipes-module.js.map