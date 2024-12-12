
bookmarkNameInput=document.getElementById("bookmarkName");
bookmarkURLInput=document.getElementById("bookmarkURL");

var sites=[];



if(localStorage.getItem("sitesLocal")!=null){
    sites=JSON.parse(localStorage.getItem("sitesLocal"))
    displaySites();
}

function makeSubmit(){

    if(inputValidate(bookmarkNameInput) & inputValidate(bookmarkURLInput)){
    var site={
        name:bookmarkNameInput.value,
        Url:bookmarkURLInput.value, 
    }

    sites.push(site);
    localStorage.setItem("sitesLocal",JSON.stringify(sites))
    clearInput()

    console.log(sites);  
    displaySites()
    }

}


function clearInput(){

    bookmarkNameInput.value =null;
    bookmarkURLInput.value =null
}

function displaySites(){

    var carton=""
    
    for(var i=0;i<sites.length;i++){
            var x=i;
        carton+=` <table class="table mt-4 text-center bg-light">
                    <thead>
                        <tr>
                            <th class="text-capitalize">index</th>
                            <th class="text-capitalize">Website Name</th>
                            <th class="text-capitalize">Visit</th>
                            <th class="text-capitalize">Delete</th>
                        </tr>
                    </thead>
                    <tbody id="tableContent">
                        <tr>
                            <td>${x+1}</td>
                            <td>${sites[i].name}</td>
                            <td>
                                <button onclick="viewSite(${i})" class="btn btn-visit btVisit" data-index="0">
                                    <i class="fa-solid fa-eye pe-2"></i>Visit
                                </button>
                            </td>
                            <td>
                                <button onclick="deleteSite(${i})" class="btn btn-delete btDelete pe-2" data-index="0">
                                    <i class="fa-solid fa-trash-can"></i>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>`
    }

    document.getElementById("Sitedata").innerHTML=carton;

}

function deleteSite(indexDeleted){

sites.splice(indexDeleted,1);
displaySites();


localStorage.setItem("sitesLocal",JSON.stringify(sites));

}

function viewSite(indexView){

    var url=sites[indexView].Url
    window.open(url)
    
}

function inputValidate(element){

    var regex={
        bookmarkName:/^[A-Z][a-z]{2,6}.{2,8}$/,
        bookmarkURL : /^(https?:\/\/)?((([-a-z0-9]{1,63}\.)*?[a-z0-9]([-a-z0-9]{0,253}[a-z0-9])?\.[a-z]{2,63})|((\d{1,3}\.){3}\d{1,3}))(:\d{1,5})?((\/|\\?)([%0-9a-f]{2}|[-\w+\.?/@~#&=]*)*)?$/i,  
    }

    if(regex[element.id].test(element.value)){

        element.classList.add("is-valid")
        element.classList.remove("is-invalid")
        element.nextElementSibling.classList.add("d-none")
        return true;

    }
    else{
        element.classList.remove("is-valid")
        element.classList.add("is-invalid")
        element.nextElementSibling.classList.remove("d-none")
        return false
    }

}














