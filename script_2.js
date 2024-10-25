let totalbudget=document.getElementById("total-budget");

let prixproduit=document.getElementById("prix-produit");

const libellproduit=document.getElementById("libelle-produit");

const totalabudgebutton=document.getElementById("total-amount-button");

const validerproduit=document.getElementById("valider-produit");

const budgeterror=document.getElementById("error-budget")

const libelleerror=document.getElementById("lebelle-produit-error");

const prixproduiterror=document.getElementById("error-prix");

const totalallbudget=document.getElementById("total-budget-output");

const  prixallproduit=document.getElementById("prix-all-produit");

const balance=document.getElementById("Balance");

const listproduit=document.getElementById("list");

let tempamount=0;

totalabudgebutton.addEventListener("click",()=>{
    tempamount=totalbudget.value;
    if(tempamount===""){
        budgeterror.classList.remove("hide");
    }else{
        budgeterror.classList.add("hide");
        totalallbudget.innerText=tempamount;
        balance.innerHTML=tempamount-prixallproduit.innerText;
    }
    totalbudget.value="";
});


const deletproduit=(Bool)=>{
    let editButton=document.getElementsByClassName("edit");
    Array.from(editButton).forEach((element)=>
        element.disabled=Bool
    )

}


const modifieelment=(element,test)=>{
    let parent_div=element.parentElement;
    let lastbalence=balance.innerText;
    let lastprixallproduit=prixallproduit.innerText;

    let Prixactuel=parent_div.querySelector(".prix").innerText;
    let leblleactuel=parent_div.querySelector(".produit").innerText;
    if(test){
        prixproduit.value=Prixactuel;
        libellproduit.value=leblleactuel;

    }

    balance.innerHTML=parseInt(lastbalence) + parseInt(Prixactuel);

    prixallproduit.innerHTML=parseInt(lastprixallproduit)-parseInt(Prixactuel);

    parent_div.remove();

    
}


const listcreatediv=(libelle_produit,prix_produit)=>{
    let div_produit=document.createElement("div");
    div_produit.classList.add("sublist-content");
    listproduit.appendChild(div_produit);
    div_produit.innerHTML=`<P class="produit">${libelle_produit}</p><p  class="prix">${prix_produit}</p>`;

    let modification_button=document.createElement("button");
    modification_button.classList.add("fa-solid", "fa-pen-to-square","edit")
    modification_button.style.fontSize="24px";
    div_produit.appendChild(modification_button);
    modification_button.addEventListener("click",()=>{
        modifieelment(modification_button,true);
    })


    let supprimer_button=document.createElement("button");
    supprimer_button.classList.add("fa-solid", "fa-trash","delete")
    supprimer_button.style.fontSize="24px";
    div_produit.appendChild(supprimer_button);
    supprimer_button.addEventListener("click" , ()=>{
            modifieelment(supprimer_button,false);
    })

    listproduit.appendChild(div_produit)

}










validerproduit.addEventListener("click",()=>{
    if(!prixproduit.value || !libellproduit.value){
        libelleerror.classList.remove("hide");
    }
    else{
        libelleerror.classList.add("hide");
        listcreatediv(libellproduit.value,prixproduit.value);

        let prix=parseInt(prixproduit.value);

        let newprixallproduit=parseInt(prixallproduit.innerText)+prix

        prixallproduit.innerHTML=newprixallproduit

        let newbalenac=balance.innerText-prix
        balance.innerHTML=newbalenac
    }
    prixproduit.value="";
    libellproduit.value="";

})








