import React from 'react';
import Form from './Form';

import {Link } from 'react-router-dom';

class Confirmation extends React.Component{
    state ={
        show : true
    }
    showIcons = () =>{
        this.setState({show: !this.state.show})
    }
    
    render(){
        if(this.state.show){
            return(
                <div>
            
            <div className="modeLight">
                        <h1 className="title">Mode light Challenge</h1>
        
                    <div className="container">
                        <div className="icons">
                                <button className="" onClick={ this.showIcons }><i  class="fas fa-moon  iconMoon fa-2x"></i></button>  
                            </div>
                            
                            <div className="text">
                            
                                <section class="col-5">
                                    Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, 
                                    hiya Harry! Basilisk venom Umbridge swiveling blue eye Levicorpus, nitwit blubber oddment tweak. Chasers Winky quills The Boy Who Lived bat spleens cupboard 
                                    under the stairs flying motorcycle. Sirius Black Holyhead Harpies, you’ve got dirt on your nose. Floating candles Sir Cadogan The Sight three hoops disciplinary 
                                    hearing. Grindlewald pig’s tail Sorcerer's Stone biting teacup. Side-along dragon-scale suits Filch 20 points, Mr. Potter.
                                
                                </section>
                            
                                <section class="col-5"> 
                                    Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers.
                                    Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid broomstick mischief managed.
                                    Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. 
                                    Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. 
                                    Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.
                                </section>
            
                                


                            
            
                            </div>
                            <Form />
                
                        
                    

                
                            
                    </div>
                        
                    </div>
                </div>
            )
        } else{
            return(
                <div className=" modeDark">
                    <h1 className="titleDark"> Mode Dark Challenge</h1>
    
                    <div className="container">
                        <div className="icons">
                            <button className="iconSun" onClick={ this.showIcons }><i  class="fas fa-sun  fa-2x"></i></button>
                        </div>
                    
                        <div className="textDark text">
                        
                            <section class="col-5">
                                Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, 
                                hiya Harry! Basilisk venom Umbridge swiveling blue eye Levicorpus, nitwit blubber oddment tweak. Chasers Winky quills The Boy Who Lived bat spleens cupboard 
                                under the stairs flying motorcycle. Sirius Black Holyhead Harpies, you’ve got dirt on your nose. Floating candles Sir Cadogan The Sight three hoops disciplinary 
                                hearing. Grindlewald pig’s tail Sorcerer's Stone biting teacup. Side-along dragon-scale suits Filch 20 points, Mr. Potter.
                            
                            </section>
                        
                            <section class="col-5"> 
                                Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers.
                                Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid broomstick mischief managed.
                                Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. 
                                Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. 
                                Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.
                            </section>
        
                            
                        </div>
                        <Form />
                    </div>
                   
                </div>
            )
        }
    }
   
}

export  default Confirmation;