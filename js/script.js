// Copyright (c) 2022 Stella S All rights reserved
//
// Created by: Stella S
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the volume of a sphere
 */
function calculate () {
 
  // get user input
  let farenheit = parseFloat(document.getElementById('farenheit').value)

  // calculate celsius
  const celsius = 5/9 * (farenheit - 32)
  
  // display the results
  document.getElementById('celsius').innerHTML = 'The temperature from farenheit to celsius is: ' + celsius.toFixed(2)
}