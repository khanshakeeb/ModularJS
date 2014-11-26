/**
 * Created by shakeeb on 9/2/14.
 * App.js will contain all the UI features
 * Light JS framework MiK.js
 */


var application = {
    modules: [],
    addModule: function (module) {
        if (typeof module === "object") {
            this.modules.push(module);
        }
    },
    run: function () {
        try {

            _.each(this.modules, function (module) {

                //Iterate each module and run init function
                module.init();
            });

        } catch (e) {
            console.log(e.message);
        }
    }
}

// document ready
$(function () {

    if (typeof AppModules === "object") { // check for object
        try {
            _.each(AppModules, function (module) {
                var appModule = eval(module); // evaluate string to js object
                if (typeof appModule != "undefined" && typeof appModule === "object") {
                    application.addModule(appModule);
                }
            });
            application.run();//Bootstrap application
        } catch (e) {
            console.log(e.message);
        }

    }


});



