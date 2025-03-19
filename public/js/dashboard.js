!(function() {
    var main = $("#main");
    var mainsystemsummaries = $("#main-system-summaries");
   
    $(".aside-link-item-wrapper").each(function() {
        $(this).on("click", function() {                 
            $(".aside-link-item-wrapper").each(function() {
                $(this).css("background-color", "#eee");
                $(this).children().css( "color", "#4169e1" );
                $(this).removeClass("card");
            });

            $(this).addClass("card");  
            $(this).css("background-color", "coral");    
            $(this).children().css( "color", "#fff" );
        });    
    });

    var asidelinkitemhome = $("#aside-link-item-home");    
    var asidelinkitemclients = $("#aside-link-item-clients");    
    var asidelinkitememployees = $("#aside-link-item-employees");    
    var asidelinkitemcontracts = $("#aside-link-item-contracts");    
    var asidelinkitemdocuments = $("#aside-link-item-documents");    
    var asidelinkitemrequests = $("#aside-link-item-requests");   
    var asidelinkitemnotifications = $("#aside-link-item-notifications");       
    
    function buildhomescreen() {
        $("#aside-link-item-home").addClass("card");  
        $("#aside-link-item-home").css("background-color", "coral");    
        $("#aside-link-item-home").children().css( "color", "#fff" );

        main.html("");
        mainsystemsummaries.html("");

        main.html(mainsystemsummaries.append(`
            <div class="card" id="summary-button-clients">
                <i class="bi bi-briefcase summary-icon" style="font-size: 1.5rem; color: #4169e1;"></i>
                <header>CLIENTS</header>
                <span class="summary-counter">67000</span>
            </div>
            <div class="card" id="summary-button-employees">
                <i class="bi bi-people summary-icon" style="font-size: 1.5rem; color: #4169e1;"></i>
                <header>EMPLOYEES</header>
                <span class="summary-counter">67000</span>
            </div>
            <div class="card" id="summary-button-contracts">
                <i class="bi bi-journal summary-icon" style="font-size: 1.5rem; color: #4169e1;"></i>
                <header>CONTRACTS</header>
                <span class="summary-counter">67000</span>
            </div>
            <div class="card" id="summary-button-documents">
                <i class="bi bi-folder summary-icon" style="font-size: 1.5rem; color: #4169e1;"></i>
                <header>DOCUMENTS</header>
                <span class="summary-counter">67000</span>
            </div>
            <div class="card" id="summary-button-requests">
                <i class="bi bi-hourglass-split summary-icon" style="font-size: 1.5rem; color: #4169e1;"></i>
                <header>REQUESTS</header>
                <span class="summary-counter">67000</span>
            </div>
            <div class="card" id="summary-button-notifications">
                <i class="bi bi-bell summary-icon" style="font-size: 1.5rem; color: #4169e1;"></i>
                <header>NOTIFICATIONS</header>
                <span class="summary-counter">67000</span>
            </div>`
        ));
    };
    
    function buildclientsscreen() {
        main.html(`
        <h4>Clients' Summary</h4>
            <table id="clients-table" class="display" style="width:100%">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>REGISTRATION DATE</th>
                        <th>EMPLOYEES</th>
                        <th>CONTRACT RENEWALS</th>
                        <th>REQUESTS</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>REGISTRATION DATE</th>
                        <th>EMPLOYEES</th>
                        <th>CONTRACT RENEWALS</th>
                        <th>REQUESTS</th>
                        <th>STATUS</th>
                    </tr>
                </tfoot>
            </table>
        `);

        new DataTable("#clients-table", {
            ajax: './clients.json',
            processing: true,
            serverSide: true
        });
    };
    
    function buildclientsemployees() {
        main.html(`
        <h4>Employees</h4>
            <table id="clients-table" class="display" style="width:100%">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>REGISTRATION DATE</th>
                        <th>EMPLOYEES</th>
                        <th>CONTRACT RENEWALS</th>
                        <th>REQUESTS</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>REGISTRATION DATE</th>
                        <th>EMPLOYEES</th>
                        <th>CONTRACT RENEWALS</th>
                        <th>REQUESTS</th>
                        <th>STATUS</th>
                    </tr>
                </tfoot>
            </table>
        `);

        new DataTable("#clients-table", {
            ajax: './clients.json',
            processing: true,
            serverSide: true
        });
    };

    function buildclientscontracts() {
        main.html(`
        <h4>Clients' Contracts</h4>
            <table id="clients-table" class="display" style="width:100%">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>REGISTRATION DATE</th>
                        <th>EMPLOYEES</th>
                        <th>CONTRACT RENEWALS</th>
                        <th>REQUESTS</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>REGISTRATION DATE</th>
                        <th>EMPLOYEES</th>
                        <th>CONTRACT RENEWALS</th>
                        <th>REQUESTS</th>
                        <th>STATUS</th>
                    </tr>
                </tfoot>
            </table>
        `);

        new DataTable("#clients-table", {
            ajax: './clients.json',
            processing: true,
            serverSide: true
        });
    };

    function buildclientsdocuments() {
        main.html(`
        <h4>Clients' Documents</h4>
        <div id="div-documents" style="display: flex; flex-direction: row;flex-wrap: wrap;"></div>
        `);       
        
        $("#div-documents").html("");
        
        for (var i = 0, length = 28; i < 28; ++i) {
            $("#div-documents").append(`
            <div class="card document-block"><i class="bi bi-file-earmark-text"></i></div>
            `);
        }
    };

    $(document).ready(function() {
        buildhomescreen();
        
        asidelinkitemhome.on("click", buildhomescreen);
        asidelinkitemclients.on("click", buildclientsscreen);
        asidelinkitememployees.on("click", buildclientsemployees);
        asidelinkitemcontracts.on("click", buildclientscontracts);
        asidelinkitemdocuments.on("click", buildclientsdocuments);

        asidelinkitemrequests.on("click", function() {
            main.html("<h5>request</h5>");
        });

        asidelinkitemnotifications.on("click", function() {
            main.html("<h5>notifications</h5>");
        });

        // summary buttons
        $("#summary-button-clients").on("click", buildclientsscreen);

        $("#summary-button-employees").on("click", function() {
            main.html("");
            main.html("<h5>employees</h5>");
        });
        $("#summary-button-contracts").on("click", function() {
            main.html("");
            main.html("<h5>contracts</h5>");
        });
        $("#summary-button-documents").on("click", function() {
            main.html("");
            main.html("<h5>documents</h5>");
        });
        $("#summary-button-requests").on("click", function() {
            main.html("");
            main.html("<h5>requests</h5>");
        });
        $("#summary-button-notifications").on("click", function() {
            main.html("");
            main.html("<h5>notifications</h5>");
        });
    });
})();