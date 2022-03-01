import React from 'react';
import '../assets/css/main.css';

export default function Home() {
    return (
        <div>
            <center>
                <span class="max-w-sm box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
                    GoGoGo
                </span>
            </center>

            <header id="header" style={{backgroundColor: "rgba(0,0,0,0.2)"}}>
                <h1><center>Travel With the Most Comprehensive Itinerary</center></h1>
                <p><center>Would you explore nature paradise in the world, let's find the best destination in world with us.</center></p>
            </header>
            
            <center>
                <form class="bg-smoke-dark p-6 md:p-10 rounded-3xl w-full backdrop-blur-sm shadow-sm shadow-black">
                    <div class="flex flex-wrap items-end -mx-3">
                        <div class="w-full px-3 mb-6">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">Location</label>
                        <input class=" focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-4/6 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" 
                        type="text" aria-label="Filter projects" placeholder="Try 'Los Angeles'" />
                    </div>		
        
                    <div class="w-full md:w-1/6 px-3 md:mb-0 ">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1"> Museum </label><br />
                    </div>
                    <div class="w-full md:w-1/6 px-3 md:mb-0 ">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1"> Restaurant </label><br />
                    </div>
                    <div class="w-full md:w-1/6 px-3 md:mb-0 ">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1"> Beach</label><br />
                    </div>
                    <div class="w-full md:w-1/6 px-3 md:mb-0 ">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1"> Monuments</label><br />
                    </div>
                    <div class="w-full md:w-1/6 px-3 md:mb-0 ">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1"> Activities</label><br />
                    </div>
                        
                    </div>
                        <div date-rangepicker="" class="flex items-center w-full">
                            <div class="relative w-4/12	px-3 mb-6">
                                <input name="start" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                                block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                                dark:focus:border-blue-500 datepicker-input" placeholder="Select date start" />
                            </div>
                            <span class="mx-4 px-1 mb-6 text-white">to</span>
                            <div class="relative w-4/12	px-3 mb-6">
                                <input name="end" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                                focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
                                datepicker-input" placeholder="Select date end" />
                            </div>
                            
                        <div class="w-full md:w-1/3 px-3 md:mb-0 ">
                        <button class="font-bold px-3 mb-6 bg-indigo-600 leading-tight bg-red hover:bg-red-light border border-red hover:border-red-light w-full text-white uppercase tracking-wide py-3 px-4 rounded">Search</button>
                        </div>
                    </div>
                </form>
            </center>
    
            <header id="header">
                <center> <h1> Your Map!</h1> </center>
                <center>

                </center>
            </header>
            
            <footer id="footer">
                <ul class="icons">
                    <li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
                </ul>
                <ul class="copyright">
                    <span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
                        GoGoGo
                    </span>
                    <li>Bhavik Thati, Evan Zhang, Allen Gao, Shloak Rathod</li>
                </ul>
            </footer>
        </div>
    )
}