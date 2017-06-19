"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Warnings and errors fire once, to avoid bombarding the user with repetition.
 * Eg: "Can"t connect to server!" might get repetitive.
 */
var lastMsg = "Prevent annoying duplicates.";
/**
 * The function responsible for attaching the messages to the container.
 */
var createToast = function (message, title, color) {
    /**
     * Container element for all of the messages created from init().
     */
    var tc = document.querySelector(".toast-container");
    if (!tc) {
        /**
         * If there's no container created from the init() function, throw an error.
         */
        throw new Error("toast-container is null.");
    }
    else {
        /**
         * Amount of time before each element is removed.
         */
        var timer_1 = 7;
        /**
         * Declare if the user's mouse is hovering over the message.
         */
        var isHovered_1 = false;
        /**
         * Create elements.
         */
        var toastEl_1 = document.createElement("div");
        var titleEl = document.createElement("h4");
        var messageEl = document.createElement("div");
        var loaderEl = document.createElement("div");
        var leftLoaderEl = document.createElement("div");
        var rightLoaderEl = document.createElement("div");
        var spinnerLoaderEl = document.createElement("div");
        /**
         * Fill contents.
         */
        titleEl.innerText = title;
        messageEl.innerText = message;
        /**
         * Add classes.
         */
        toastEl_1.classList.add("toast");
        toastEl_1.classList.add(color);
        titleEl.classList.add("toast-title");
        messageEl.classList.add("toast-message");
        loaderEl.classList.add("toast-loader");
        leftLoaderEl.classList.add("toast-loader-left");
        leftLoaderEl.classList.add(color);
        rightLoaderEl.classList.add("toast-loader-right");
        spinnerLoaderEl.classList.add("toast-loader-spinner");
        /**
         * Click (makes the message go away entirely).
         */
        toastEl_1.addEventListener("click", function (e) {
            e.currentTarget.classList.add("poof");
            setTimeout(function () {
                if (!tc) {
                    throw (Error("toast-container is null."));
                }
                else {
                    tc.removeChild(toastEl_1);
                }
            }, 200);
        });
        /**
         * MouseEnter (pauses the timer).
         */
        toastEl_1.addEventListener("mouseenter", function (e) {
            var children = e.currentTarget.children[2].children;
            for (var i = 0; i < children.length; i++) {
                children[i].style.animationPlayState = "paused";
            }
            isHovered_1 = true;
        });
        /**
         * MouseLeave (resumes the timer).
         */
        toastEl_1.addEventListener("mouseleave", function (e) {
            var children = e.currentTarget.children[2].children;
            for (var i = 0; i < children.length; i++) {
                children[i].style.animationPlayState = "running";
            }
            isHovered_1 = false;
        });
        /**
         * Append children.
         */
        loaderEl.appendChild(leftLoaderEl);
        loaderEl.appendChild(rightLoaderEl);
        loaderEl.appendChild(spinnerLoaderEl);
        toastEl_1.appendChild(titleEl);
        toastEl_1.appendChild(messageEl);
        toastEl_1.appendChild(loaderEl);
        tc.appendChild(toastEl_1);
        /**
         * Start timer.
         */
        var interval_1 = setInterval(function () {
            if (timer_1 <= 7) {
                toastEl_1.classList.add("active");
            }
            if (!isHovered_1 && timer_1 <= .800) {
                toastEl_1.classList.add("poof");
            }
            if (!isHovered_1) {
                timer_1 -= 0.100;
                if (timer_1 <= 0) {
                    clearInterval(interval_1);
                    if (toastEl_1 && toastEl_1.parentNode === tc) {
                        if (!tc) {
                            throw (Error("toast-container is null."));
                        }
                        else {
                            tc.removeChild(toastEl_1);
                        }
                    }
                }
            }
        }, 100);
    }
};
/**
 * Yellow message with "Warning" as the default title.
 */
exports.warning = function (message, title, color) {
    if (title === void 0) { title = "Warning"; }
    if (color === void 0) { color = "yellow"; }
    if (lastMsg === message) {
        console.warn(message);
    }
    else {
        createToast(message, title, color);
    }
    lastMsg = message;
};
/**
 *  Red message with "Error" as the default title.
 */
exports.error = function (message, title, color) {
    if (title === void 0) { title = "Error"; }
    if (color === void 0) { color = "red"; }
    if (lastMsg === message) {
        console.error(message);
    }
    else {
        createToast(message, title, color);
    }
    lastMsg = message;
};
/**
 *  Green message with "Success" as the default title.
 */
exports.success = function (message, title, color) {
    if (title === void 0) { title = "Success"; }
    if (color === void 0) { color = "green"; }
    createToast(message, title, color);
};
/**
 *  Red message with "FYI" as the default title.
 */
exports.info = function (message, title, color) {
    if (title === void 0) { title = "FYI"; }
    if (color === void 0) { color = "blue"; }
    createToast(message, title, color);
};
/**
 *  Blue message with "Did you know?" as the default title.
 */
exports.fun = function (message, title, color) {
    if (title === void 0) { title = "Did you know?"; }
    if (color === void 0) { color = "dark-blue"; }
    createToast(message, title, color);
};
/**
 *  Adds a secret container div for holding toast messages.
 */
exports.init = function () {
    // Create container and append it.
    var toastContainer = document.createElement("div");
    toastContainer.classList.add("toast-container");
    document.body.appendChild(toastContainer);
};
