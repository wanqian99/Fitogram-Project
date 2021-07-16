/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready


document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}





/***** home.html slideshow *****/
var bannerIndex = 0;
showBanner();

function showBanner() {
    var i;
    var banner = document.getElementsByClassName("banner");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < banner.length; i++) {
        banner[i].style.display = "none";  
    }
    bannerIndex++;
    if (bannerIndex > banner.length) {bannerIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    banner[bannerIndex-1].style.display = "block";  
    dots[bannerIndex-1].className += " active";
    setTimeout(showBanner, 2000); // Change image every 2 seconds
}





/***** home.html chat form *****/
function openForm() {
    /*displays form, and dont display chat icon button,  when form opens*/
    document.getElementById("myForm").style.display = "block";
    document.getElementById("chat_icon").style.display = "none";
    document.getElementById("trainerchatmsg").style.display = "none";
    document.getElementById("nutritionistchatmsg").style.display = "none";
}

function closeForm() {
    /*displays chat icon button, and dont display form,  when form closes*/
    document.getElementById("myForm").style.display = "none";
    document.getElementById("chat_icon").style.display = "block";
    
    /*reset the select chat type screen when form closes*/
    document.getElementById("chattxt").style.display = "block";
    document.getElementById("seltype").style.display = "block";
    document.getElementById("trainerChat").style.display = "block";
    document.getElementById("nutritionistChat").style.display = "block";
    document.getElementById("chatfaq").style.display = "block";
}

function trainer() {
    /*remove visibility of select chat type screen when user selects a chat type*/
    document.getElementById("trainerchatmsg").style.display = "block";
    document.getElementById("nutritionistchatmsg").style.display = "none";
    document.getElementById("chattxt").style.display = "none";
    document.getElementById("seltype").style.display = "none";
    document.getElementById("trainerChat").style.display = "none";
    document.getElementById("nutritionistChat").style.display = "none";
    document.getElementById("chatfaq").style.display = "none";
}

function nutritionist() {
    /*remove visibility of select chat type screen when user selects a chat type*/
    document.getElementById("nutritionistchatmsg").style.display = "block";
    document.getElementById("trainerchatmsg").style.display = "none";
    document.getElementById("chattxt").style.display = "none";
    document.getElementById("seltype").style.display = "none";
    document.getElementById("trainerChat").style.display = "none";
    document.getElementById("nutritionistChat").style.display = "none";
    document.getElementById("chatfaq").style.display = "none";
}