$(function () {

    let revenueAmt = "$48,250";
    let customerNum = "1,284";
    let ordersAmt = "342";
    let issuesAmt = "12";
    let username = "UTRGV Vaqueros";
    let notifAmt = 3;

    const customers = [
        {
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "status": "Active",
            "joined": "09/10/2026"
        },
        {
            "name": "Robert Smith",
            "email": "robert@example.com",
            "status": "Pending",
            "joined": "09/12/2026"
        },
        {
            "name": "Maria Garcia",
            "email": "maria@example.com",
            "status": "Active",
            "joined": "09/15/2026"
        }
    ];

    const sales = [
        {
            "product": "Product A",
            "quantity": "124",
            "revenue": "$12,400"
        },
        {
            "product": "Product B",
            "quantity": "98",
            "revenue": "$9,800"
        },
        {
            "product": "Product C",
            "quantity": "75",
            "revenue": "$7,500"
        },
    ];

    const activities = [
        {
            "message" : "New customer registered"
        },
        {
            "message" : "Order #10482 completed"
        },
        {
            "message" : "Payment received"
        },
        {
            "message" : "Support ticket created"
        }
    ];

    const messages = [
        {
            "messsage" : "All systems operational"
        },
        {
            "messsage" : "All settings loaded for this system"
        }
    ];

    const notifications = [
        {
            "messsage": "A new shipment is expected to arrive on Sep 30, 2026"
        },
        {
            "messsage": "There are 12 outstanding issues with last week's orders"
        },
        {
            "messsage": "Three new customers joined our platform in the last month"
        },
    ];

    const tasks = [
       {
            "messsage": "Review orders"
        },
        {
            "messsage": "Contact customer"
        },
        {
            "messsage": "Generate report"
        },
    ]


    // *********************************************************************
    // Do not modify the JS objects above. You will write your code below.
    // *********************************************************************

    // Add username and dashboard statistics
    $("#username").text(username);
    $(".revenue-amt").text(revenueAmt);
    $("#customer-num").text(customerNum);
    $("#orders-amt").text(ordersAmt);
    $("#issues-amt").text(issuesAmt);

    // Add notification count
    $("#notification-num").text(notifAmt);

    // Build sales table
    sales.forEach(function (sale) {
        const row = $("<tr>");

        row.append($("<td>").text(sale.product));
        row.append($("<td>").text(sale.quantity));
        row.append($("<td>").text(sale.revenue));

        $("#salesTableBody").append(row);
    });

    // Build activity list
    activities.forEach(function (activity) {
        const item = $("<li>").text(activity.message);
        $("#activity-list").append(item);
    });

    // Build recent customers table
    customers.forEach(function (customer) {
        const row = $("<tr>");

        row.append($("<td>").text(customer.name));
        row.append($("<td>").text(customer.email));

        const status = $("<span>")
            .addClass("status")
            .text(customer.status);

        row.append($("<td>").append(status));
        row.append($("<td>").text(customer.joined));

        $("#customerTableBody").append(row);
    });

    // Build system status list
    messages.forEach(function (message) {
        const item = $("<li>").text(message.messsage);
        $("#system-status-list").append(item);
    });

    // Build notifications list
    notifications.forEach(function (notification) {
        const item = $("<li>").text(notification.messsage);
        $("#notifications-list").append(item);
    });

    // Build tasks list
    tasks.forEach(function (task) {
        const item = $("<li>").text(task.messsage);
        $("#tasks-list").append(item);
    });

    // Convert all buttons into jQuery UI buttons
    $("button").button();

    // Convert dashboardTabs into a Tabs widget
    $("#dashboardTabs").tabs();

    // Convert customerDialog into a Dialog widget
    $("#customerDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 450,
        buttons: {
            "Create Customer": function () {
                var name = $("#customerName").val();
                var email = $("#customerEmail").val();

                if (!name || !email) {
                    alert("Please enter a name and email.");
                    return;
                }
            }
        }
    });

});