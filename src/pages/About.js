export const About = async () => {
  const view = `
  
    <ul>
        # Rick and Morty SPA (Single Page Application)

        <li>This is a simple Single Page Application that utilizes the Rick     and Morty API to display information about characters,       locations, and episodes from the animated series "Rick and    Morty."</li>
    </ul>
 
    <ul>
        ## Features
         <li>View a list of characters, locations, and episodes.</li>
         <li>Search for specific characters, locations, and       episodes.</li>
         <li>Click on items to see more details.</li>
    </ul>
 
     <ul>
        ## Technologies Used
        <li> HTML5</li>
        <li> CSS3</li>
        <li> JavaScript (ES6)</li>
        <li> [Rick and Morty API](https://rickandmortyapi.com/)</li>
    </ul>
  
    <ul>
        ## Installation
        <p>1. Clone the repository:</p>
         <li>git clone https://github.com/Jose-Orihuela-Ponce/Rick-Morty.git</li>
    
    </ul>

      `;
  return view;
};
