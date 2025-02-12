var tablinks = document.getElementsByClassName("tab-links");
                    var tabcontents = document.getElementsByClassName("tab-contents");
                    function opentab(tabname){
                           for(tablink of tablinks){ 
                           tablink.classList.remove("active-link");
                    }
                           for(tabcontent of tabcontents){
                                  tabcontent.classList.remove("active-tab");
                    }
                    event.currentTarget.classList.add("active-link");
                    document.getElementById(tabname).classList.add("active-tab");
             }  
       
          
          

             function filterWorks(category) {
              const works = document.querySelectorAll('.workcontent');
              
              works.forEach(work => {
                  if (category === 'all' || work.classList.contains(category)) {
                      work.style.display = 'block';
                  } else {
                      work.style.display = 'none';
                  }
              });
       
              const filterItems = document.querySelectorAll('.filter li');
              filterItems.forEach(item => {
                  item.classList.remove('active');
              });
              document.getElementById(category).classList.add('active');
          }
       
          function showMore() {
       const moreContents = document.querySelectorAll('.more-content');
       
       moreContents.forEach(content => {
           content.style.display = 'block';
       });
   
       document.getElementById('moreButton').style.display = 'none';
   }
   
   document.addEventListener('DOMContentLoaded', () => {
       const moreContents = document.querySelectorAll('.more-content');
       moreContents.forEach(content => {
           content.style.display = 'none';
       });
   
       const moreButton = document.getElementById('moreButton');
       moreButton.addEventListener('click', showMore);
   });
      