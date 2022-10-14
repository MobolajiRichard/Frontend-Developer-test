import { render, screen } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import SearchResult from "../Search/SearchResults";

describe ("Results", ()=>{

    const mockFunction = jest.fn()

    const mockData = {
        config:{
            iiif_url:"https://www.artic.edu/iiif/2"
        },
        data:[
            {
                title:'Test1',
                data_display:'2022',
                place_of_origin: 'USA',
                image_id:'1'
            },
            {
                title:'Test2',
                data_display:'2022',
                place_of_origin: 'Japan',
                image_id:'2'
            },
            {
                title:'Test3',
                data_display:'2022',
                place_of_origin: 'Nigeria',
                image_id:'3'
            },
            {
                title:'Test4',
                data_display:'2022',
                place_of_origin: 'Canada',
                image_id:'4'
            },
            {
                title:'Test5',
                data_display:'2022',
                place_of_origin: 'United Kingdom',
                image_id:'5'
            }
        ]
    }

    test('renders all neccessary details', ()=>{
    render(<SearchResult data={mockData} viewDetails={mockFunction}/>)

         const containerList = screen.getAllByTestId("result-container");
        waitFor(()=>expect(containerList).toBeInTheDocument()) 

        const imageList = screen.getAllByTestId("image")
        waitFor(()=>expect(imageList).toBeInTheDocument()) 
    

        const titleList = screen.getAllByTestId("title")
        waitFor(()=>expect(titleList).toBeInTheDocument()) 
    

        const dateList = screen.getAllByTestId("display_date")
        waitFor(()=>expect(dateList).toBeInTheDocument()) 
    

      
    
    });

    
    
})
