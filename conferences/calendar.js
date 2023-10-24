"use strict";
$(document).ready(function(){
    generateCalendar();
});
var thisMomentInTime = new Date().toDateString();


function previous() {
    var curMonthYear = $("#month_year").text();
    var curListedYear = curMonthYear.substr(-4);
    var curListedMonth = function(currentMonth) {
        if (curMonthYear === "January " + curListedYear) { return 0; }
        else if (curMonthYear === "February " + curListedYear) { return 1; }
        else if (curMonthYear === "March " + curListedYear) { return 2; }
        else if (curMonthYear === "April " + curListedYear) { return 3; }
        else if (curMonthYear === "May " + curListedYear) { return 4; }
        else if (curMonthYear === "June " + curListedYear) { return 5; }
        else if (curMonthYear === "July " + curListedYear) { return 6; }
        else if (curMonthYear === "August " + curListedYear) { return 7; }
        else if (curMonthYear === "September " + curListedYear) { return 8; }
        else if (curMonthYear === "October " + curListedYear) { return 9; }
        else if (curMonthYear === "November " + curListedYear) { return 10; }
        else if (curMonthYear === "December " + curListedYear) { return 11; }
    };

    if (curListedMonth === 0)
    {
        var today = new Date(curListedYear - 1, 11);
    }
    else
    {
        var today = new Date(curListedYear, curListedMonth(curMonthYear) - 1);
    }

    var currentMonth = today.getMonth(today);
    var currentYear = today.getFullYear(today);

    generateNewCalendar(today);
};

function next() {
    var curMonthYear = $("#month_year").text();
    var curListedYear = curMonthYear.substr(-4);
    var curListedMonth = function(currentMonth) {
        if (curMonthYear === "January " + curListedYear) { return 0; }
        else if (curMonthYear === "February " + curListedYear) { return 1; }
        else if (curMonthYear === "March " + curListedYear) { return 2; }
        else if (curMonthYear === "April " + curListedYear) { return 3; }
        else if (curMonthYear === "May " + curListedYear) { return 4; }
        else if (curMonthYear === "June " + curListedYear) { return 5; }
        else if (curMonthYear === "July " + curListedYear) { return 6; }
        else if (curMonthYear === "August " + curListedYear) { return 7; }
        else if (curMonthYear === "September " + curListedYear) { return 8; }
        else if (curMonthYear === "October " + curListedYear) { return 9; }
        else if (curMonthYear === "November " + curListedYear) { return 10; }
        else if (curMonthYear === "December " + curListedYear) { return 11; }
    };

    if (curListedMonth === 12)
    {
        var today = new Date(curListedYear + 1, 0);
    }
    else
    {
        var today = new Date(curListedYear, curListedMonth(curMonthYear) + 1);
    }

    var currentMonth = today.getMonth(today);
    var currentYear = today.getFullYear(today);

    generateNewCalendar(today);
};

function generateNewCalendar(currentListedDay)
{
    var currentMonth = currentListedDay.getMonth(day);
    var currentYear = currentListedDay.getFullYear(day);
    var getMonthText = function(currentMonth) {
        if (currentMonth === 0) { return "January"; }
        else if (currentMonth === 1) { return "February"; }
        else if (currentMonth === 2) { return "March"; }
        else if (currentMonth === 3) { return "April"; }
        else if (currentMonth === 4) { return "May"; }
        else if (currentMonth === 5) { return "June"; }
        else if (currentMonth === 6) { return "July"; }
        else if (currentMonth === 7) { return "August"; }
        else if (currentMonth === 8) { return "September"; }
        else if (currentMonth === 9) { return "October"; }
        else if (currentMonth === 10) { return "November"; }
        else if (currentMonth === 11) { return "December"; }
    };
    $("#month_year").html(getMonthText(currentMonth) + " " + currentYear);
    
    var getLastDayofMonth = function(currentMonth) {
        var lastDayofMonth = new Date(currentListedDay.getFullYear(), currentMonth + 1, 0).getDate();
        return lastDayofMonth;
    };
    var lastDayofMonth = getLastDayofMonth(currentMonth);

    var rows = "<caption style=\"caption-side:bottom; font-weight:bold\">Conferences this month</caption><tbody><tr><th>Sunday</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th></tr>";   //  This will be used to update the rows
    var date;   //  This will be used for the current date
    var day;    //  This will be used for the day of the week
    var start;  //  This will be used for the start of the calendar

    for (var i = 1; i <= lastDayofMonth; i++)
    {
        var newDay = new Date(currentYear, currentMonth, i);
        date = newDay.getDate();
        day = newDay.getDay();
        if (date === 1 || day === 0)
        {
            rows = rows.concat("<tr>");
        }
        start = 0;
        if (i == 1)
        {
            while (start < day)
            {
                rows = rows.concat("<td></td>");
                start++;
            }
        }

        if (newDay.toDateString() === thisMomentInTime)
        {
            rows = rows.concat("<td class=\"today\">" + date);
        }
        else
        {
            rows = rows.concat("<td>" + date);
        }

        /*  Date checks for conferences */
        //  Confirm 2021 for following dates
        if (currentYear === 2021)
        {
            //  Def Con
            if (currentMonth === 7 && (newDay.getDate() === 5 || newDay.getDate() === 6 || newDay.getDate() === 7 || newDay.getDate() === 8))
            {
                rows = rows.concat("<br><b>Def Con</b>");
            }
            //  Black Hat
            if ((currentMonth === 6 && (newDay.getDate() === 31)) || (currentMonth === 7 && (newDay.getDate() === 1 || newDay.getDate() === 2 || newDay.getDate() === 3 || newDay.getDate() === 4 || newDay.getDate() === 5)))
            {
                rows = rows.concat("<br><b>Black Hat</b>");
            }        
            //  RSA Conference
            if (currentMonth === 4 && (newDay.getDate() === 17 || newDay.getDate() === 18 || newDay.getDate() === 19 || newDay.getDate() === 20))
            {
                rows = rows.concat("<br><b>RSA Conference</b>");
            }
        }
        

        /*  End the table data  */
        rows = rows.concat("</td>");

        if (i == lastDayofMonth)
        {
            while (day < 6)
            {
                rows = rows.concat("<td></td>");
                day++;
            }
        }
        
        if (date === lastDayofMonth || day === 6)
        {
            rows = rows.concat("</tr>");
        }
    }
    $("#calendar").html(rows);
};

function generateCalendar()
{
    var today = new Date();
    var currentMonth = today.getMonth(today);
    var currentYear = today.getFullYear(today);
    var getMonthText = function(currentMonth) {
        if (currentMonth === 0) { return "January"; }
        else if (currentMonth === 1) { return "February"; }
        else if (currentMonth === 2) { return "March"; }
        else if (currentMonth === 3) { return "April"; }
        else if (currentMonth === 4) { return "May"; }
        else if (currentMonth === 5) { return "June"; }
        else if (currentMonth === 6) { return "July"; }
        else if (currentMonth === 7) { return "August"; }
        else if (currentMonth === 8) { return "September"; }
        else if (currentMonth === 9) { return "October"; }
        else if (currentMonth === 10) { return "November"; }
        else if (currentMonth === 11) { return "December"; }
    };
    $("#month_year").html(getMonthText(currentMonth) + " " + currentYear);
    
    var getLastDayofMonth = function(currentMonth) {
        var lastDayofMonth = new Date(today.getFullYear(), currentMonth + 1, 0).getDate();
        return lastDayofMonth;
    };
    var lastDayofMonth = getLastDayofMonth(currentMonth);

    var rows = $("#calendar").html();   //  This will be used to update the rows
    var date;   //  This will be used for the current date
    var day;    //  This will be used for the day of the week
    var start;  //  This will be used for the start of the calendar

    for (var i = 1; i <= lastDayofMonth; i++)
    {
        var newDay = new Date(currentYear, currentMonth, i);
        date = newDay.getDate();
        day = newDay.getDay();
        if (date === 1 || day === 0)
        {
            rows = rows.concat("<tr>");
        }
        start = 0;
        if (i == 1)
        {
            while (start < day)
            {
                rows = rows.concat("<td></td>");
                start++;
            }
        }
        if (newDay.toDateString() === thisMomentInTime)
        {
            rows = rows.concat("<td class=\"today\">" + date);
        }
        else
        {
            rows = rows.concat("<td>" + date);
        }

        /*  Date checks for conferences */
        //  Confirm 2021 for following dates
        if (currentYear === 2021)
        {
            //  Def Con
            if (currentMonth === 7 && (newDay.getDate() === 5 || newDay.getDate() === 6 || newDay.getDate() === 7 || newDay.getDate() === 8))
            {
                rows = rows.concat("<br><b>Def Con</b>");
            }
            //  Black Hat
            if ((currentMonth === 6 && (newDay.getDate() === 31)) || (currentMonth === 7 && (newDay.getDate() === 1 || newDay.getDate() === 2 || newDay.getDate() === 3 || newDay.getDate() === 4 || newDay.getDate() === 5)))
            {
                rows = rows.concat("<br><b>Black Hat</b>");
            }        
            //  RSA Conference
            if (currentMonth === 4 && (newDay.getDate() === 17 || newDay.getDate() === 18 || newDay.getDate() === 19 || newDay.getDate() === 20))
            {
                rows = rows.concat("<br><b>RSA Conference</b>");
            }
        }
        

        /*  End the table data  */
        rows = rows.concat("</td>");

        if (i == lastDayofMonth)
        {
            while (day < 6)
            {
                rows = rows.concat("<td></td>");
                day++;
            }
        }
        
        if (date === lastDayofMonth || day === 6)
        {
            rows = rows.concat("</tr>");
        }
    }
    $("#calendar").html(rows);
};