const tabs = document.querySelector(".tabs");
const tabBtns = tabs.querySelectorAll("[role = 'tab']");
const tabPanel = Array.from(tabs.querySelectorAll("[role = 'tabpanel']"));

function handleTabClick(event){
    // console.log(event.currentTarget);
    //hide all tabpanels
    // console.log(tabPanel);
    tabPanel.forEach(function(panel){
        // console.log(panel);
        panel.hidden = true;
    })

    //mark all tabs as unselected
    tabBtns.forEach(tab => {tab.setAttribute('aria-selected',false)} );
    event.currentTarget.setAttribute('aria-selected',true);

    const {id} = event.currentTarget;
    // console.log(id);
    // const tabsPanel = tabs.querySelector(`[aria-labelledby = "${id}"]`);
    // tabsPanel.hidden = false;

   const Paneltab = tabPanel.find(panel => { if(panel.getAttribute("aria-labelledby")=== id){
        return true;
    }
    });
    Paneltab.hidden = false;
}


tabBtns.forEach(button => button.addEventListener("click", handleTabClick));



