import * as React from 'react';
//import PropTypes from "prop-types";
//import withStyles from "@material-ui/core/styles/withStyles";

//import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import GridContainer from '../../Components/Grid/GridContainer';
import GridItem from '../../Components/Grid/GridItem';
import Paper from '@mui/material/Paper';

import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

class StaticCharPage extends React.Component {
    state = {
        data: {
            playerName: "Tom McDonald",
            characterName: "Brok",
            eventDate: "7/23/2021",
            exp: {
                total: 231,
                spent: 0,
                job: 10
            },
            bankTotal: 0,
            ppTotal: 0,
            hp: 6,
            armor: 4,
            racialSkills: [
                {name: "Reduce to Slam", description: "Reduce any effect to Slam", cost: 5, bought: 1, max: 1},
                {name: "Reduce to Slam", description: "Reduce any effect to Slam", cost: 5, bought: 1, max: 1}
            ],
            generalSkills: [
                {name: "Read Write (Passive)", description: "You can read and write", cost: 0, bought: 1, max: 1},
                {name: "Maintenance (Passive)", description: "Refresh armor at blacksmith station", cost: 0, bought: 1, max: 1},
                {name: "Knowledge [Construction]", 
                    description: "For each level of a particular knowledge skill, you can ask plot one question about the topic.", 
                    cost: 1, bought: 1, max: 0},
                {name: "Knowledge [Laws / Legal Writing]",
                    description: "For each level of a particular knowledge skill, you can ask plot one question about the topic.", 
                    cost: 1, bought: 1, max: 0},
                {name: "Provider [Alchemy]", description: "Acquire the Gather \"X\" resource skill", cost: 1, bought: 1, max: 0}
            ],
            weaponSkills: [
                {name: "Physical Strike Disarm", 
                    description: "Physical Strike Disarm", 
                    cost: 2, bought: 1, max: 4}
            ],
            jobs: [
                {
                    name: "Specialist",
                    skills: [
                        {name: "Weapon Training (Passive)[Sword, Left Hand]", 
                            description: "Weapon training with the chosen weapon and hand", cost: 1, bought: 1, max: 0},
                        {name: "Backstab", 
                            description: "3 Damage by physical. Can only be done from behind the enemy you are attacking.", 
                            cost: 0, bought: 1, max: 0},
                        {name: "Nimble", 
                            description: "Grants 1 unrepped armor (up to 4 times)", cost: 2, bought: 2, max: 4},
                        {name: "Vitality", 
                            description: "Grants 1 additional HP.", cost: 2, bought: 2, max: 0},
                    ]
                },
                {
                    name: "Mastermind",
                    skills: [
                        {name: "I know things...", 
                            description: "This skill grants one \"Expose X\". X being any specific characteristic except Dead or Spirit.", 
                            cost: 0, bought: 3, max: 0},
                        {name: "Wrong Guy", description: "Resist Expose", cost: 0, bought: 2, max: 0},
                        {name: "Stop!", description: "By my gesture Repulse by physical", cost: 0, bought: 2, max: 0},
                        {name: "Buddy", description: "Charm by physical", cost: 2, bought: 2, max: 0},
                        {name: "Shh...", description: "Mute by physical", cost: 2, bought: 2, max: 0},
                        {name: "Fear me ladder", description: "Fear by physical", cost: 3, bought: 2, max: 0},
                        {name: "I'm Right, They're Wrong", description: "Imbue Resist Charm by physical", cost: 4, bought: 1, max: 0},
                        {name: "Infuriate", description: "Rage by physical", cost: 4, bought: 2, max: 0},
                        {name: "Hypnosis", description: "By my Gaze Daze by physical", cost: 5, bought: 1, max: 0},
                        {name: "Promise me anything", description: "Short Dominate by physical", cost: 7, bought: 2, max: 0}
                    ]
                },
                {
                    name: "Alchemist",
                    skills: [
                        {name: "Hidden Teachings", 
                            description: "Grants use of the Gather[Alchemy] skill", cost: 0, bought: 2, max: 0},
                        {name: "Build Trap", 
                            description: "Grants creating traps or adding gas per skill purchase", cost: 0, bought: 1, max: 0},
                        {name: "Tattered Notes", 
                            description: "Learn level 1 recipe per purchase.", cost: 0, bought: 2, max: 4},
                        {name: "Acid Flask", 
                            description: "Packet delivered 2 damage by physical", cost: 0, bought: 2, max: 0},
                        {name: "Stockpile", 
                            description: "Grants one alchemist component at the start of the game", cost: 1, bought: 3, max: 0},
                        {name: "Chemist's Page", 
                            description: "Learn level 2 recipe per purchase.", cost: 2, bought: 2, max: 4},
                        {name: "Journeyman's Book", 
                            description: "Learn level 3 recipe per purchase.", cost: 4, bought: 2, max: 4},
                        {name: "Philosopher's Stone", 
                            description: "Learn level 4 recipe per purchase.", cost: 6, bought: 2, max: 4},
                    ],
                    recipes: [
                        {name: "Cone Shell Secretion", level: 1, cost: 5, description: ""},
                        {name: "Anti-Toxin", level: 1, cost: 5, description: ""},
                        {name: "Steroid Injection", level: 2, cost: 5, description: ""},
                        {name: "Nerve Toxin", level: 2, cost: 5, description: ""},
                        {name: "Fire Ant Stinger", level: 3, cost: 5, description: ""},
                        {name: "Toad Secretion", level: 3, cost: 5, description: ""},
                        {name: "Potent Venom", level: 4, cost: 5, description: ""},
                        {name: "Inoculation", level: 4, cost: 5, description: ""},

                    ],
                    maxlevel: 4
                }
            ],
            items: [
                {name: "Unknown", type: "Magic", remaining: 8, professon: "Naturalist", exp: 4, uses: [
                    {name: "Burst", charges: 1},
                    {name: "Steal Spirit", charges: 1},
                    {name: "Stay", charges: 1},
                    {name: "Resist Charm", charges: 1},
                    {name: "Cure", charges: 1}
                ]}
            ]
        }
    }

    async componentDidMount(){
        this.calculateAllSpentXP();
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    calculateFreeExp(){
        const {exp} = this.state.data;
        return exp.total - exp.spent - exp.job;
    }

    calculateXPCost(bought, base){
        let total = 0;
        let newbase = base;
        let count = 1;
        while(count <= bought){
            total += newbase;
            newbase += 1;
            count += 1;        
        }
        return total;        
    }

    calculateNextCost(bought, base, max){
        if(max > 0 && bought >= max){
            return "--"
        }else{
            return bought + base
        }
    }

    calculateAllSpentXP(){
        let totalXP = 0;
        const {generalSkills, weaponSkills, racialSkills, jobs, items} = this.state.data;
        const {data} = this.state;
        racialSkills.forEach((skill) => {
            totalXP += this.calculateXPCost(skill.bought, skill.cost);
        });
        generalSkills.forEach((skill) => {
            totalXP += this.calculateXPCost(skill.bought, skill.cost);
        });
        weaponSkills.forEach((skill) => {
            totalXP += this.calculateXPCost(skill.bought, skill.cost);
        });
        jobs.forEach((job) => {
            job.skills.forEach((skill) => {
                totalXP += this.calculateXPCost(skill.bought, skill.cost);
            });
        });
        totalXP += this.calculateItemExp(items);
        data.exp.spent = totalXP;
        this.setState(data);
    }

    calculateItemExp(items){
        let itemsXP = 0;
        items.forEach((item) => {
            itemsXP += item.exp;
        });
        return itemsXP;
    }

    calculateRecipeCost(level, cost, maxlevel){
        let discount = maxlevel - level;
        return cost - discount;
    }

    renderItemUses(item){
        let uses = "";
        item.uses.forEach((use) => {
            uses += use.name + ",";
        });
        uses = uses.substring(0, uses.length - 1);
        return uses;
    }

    renderItemBoxes(item){
        let x = 0;
        let output = "";
        while(x < 15 - item.remaining){
            output += this.renderItemUsedBox();
            x++;
        }
        while(x < 15){
            output += this.renderItemEmptyBox();
            x++;
        }
        return(
            <React.Fragment>
                {output}
            </React.Fragment>
        );
    }

    renderItemUsedBox(){
        return("X");
    }

    renderItemEmptyBox(){
        return("O");
    }

    renderAlchemyRecipes(){
        const jobs = this.state.data.jobs;
        //let alchemist = {};
        jobs.forEach((job) => {
            if(job.name === "Alchemist"){
        //        alchemist = job;
            }
        });
        

    }

    render() {
        const data = this.state.data;
        const {racialSkills, generalSkills, weaponSkills, jobs, items} = data;
        return (
            <div class="staticcharpage">
                <GridContainer xs={12} sm={12} md={12} spacing={2} direction="row" justify="space-around" alignItems="top">
                    <GridItem>
                        <Paper>
                            <div>Event Date</div>
                            <div>Player Name</div>
                            <div>Character Name</div>
                            <div>Hit Points</div>
                            <div>Armor (Max)</div>
                        </Paper>
                    </GridItem>
                    <GridItem>
                        <Paper>
                            <div>{data.eventDate}</div>
                            <div>{data.playerName}</div>
                            <div>{data.characterName}</div>
                            <div>{data.hp}</div>
                            <div>{data.armor}</div>
                        </Paper>                    
                    </GridItem>
                    <GridItem>
                        <Paper>
                            <div>Total XP</div>
                            <div>Spent XP</div>
                            <div>Job XP</div>
                            <div>Free XP</div>
                        </Paper>                    
                    </GridItem>
                    <GridItem>
                        <Paper>
                            <div>{data.exp.total}</div>
                            <div>{data.exp.spent}</div>
                            <div>{data.exp.job}</div>
                            <div>{this.calculateFreeExp()}</div>
                        </Paper>                    
                    </GridItem>
                </GridContainer>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Racial Skills</TableCell>
                                <TableCell>Base Cost</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Bought</TableCell>
                                <TableCell>XP Cost</TableCell>
                                <TableCell>Next Cost</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {racialSkills.map((skill, i) => (
                                <TableRow key={i}>
                                    <TableCell size="small" component="th" scope="row">{skill.name}</TableCell>
                                    <TableCell size="small" component="th" scope="row">{skill.cost}</TableCell>
                                    <TableCell size="small" component="th" scope="row">{skill.description}</TableCell>
                                    <TableCell size="small" component="th" scope="row">{skill.bought}</TableCell>
                                    <TableCell size="small" component="th" scope="row">{this.calculateXPCost(skill.bought, skill.cost,)}</TableCell>
                                    <TableCell size="small" component="th" scope="row">{this.calculateNextCost(skill.bought, skill.cost, skill.max)}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell variant="head">General Skills</TableCell>
                                <TableCell variant="head">Base Cost</TableCell>
                                <TableCell variant="head">Description</TableCell>
                                <TableCell variant="head">Bought</TableCell>
                                <TableCell variant="head">XP Cost</TableCell>
                                <TableCell variant="head">Next Cost</TableCell>
                            </TableRow>
                            {generalSkills.map((skill, i) => (
                                <TableRow key={i}>
                                    <TableCell size="small" component="th" scope="row">{skill.name}</TableCell>
                                    <TableCell size="small" component="th" scope="row">{skill.cost}</TableCell>
                                    <TableCell size="small" component="th" scope="row">{skill.description}</TableCell>
                                    <TableCell size="small" component="th" scope="row">{skill.bought}</TableCell>
                                    <TableCell size="small" component="th" scope="row">{this.calculateXPCost(skill.bought, skill.cost)}</TableCell>
                                    <TableCell size="small" component="th" scope="row">{this.calculateNextCost(skill.bought, skill.cost, skill.max)}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell variant="head">Weapon Skills</TableCell>
                                <TableCell variant="head">Base Cost</TableCell>
                                <TableCell variant="head">Description</TableCell>
                                <TableCell variant="head">Bought</TableCell>
                                <TableCell variant="head">XP Cost</TableCell>
                                <TableCell variant="head">Next Cost</TableCell>
                            </TableRow>
                            {weaponSkills.map((skill, i) => (
                                <TableRow key={i}>
                                    <TableCell size="small" component="th" scope="row">{skill.name}</TableCell>
                                    <TableCell size="small" component="th" scope="row">{skill.cost}</TableCell>
                                    <TableCell size="small" component="th" scope="row">{skill.description}</TableCell>
                                    <TableCell size="small" component="th" scope="row">{skill.bought}</TableCell>
                                    <TableCell size="small" component="th" scope="row">{this.calculateXPCost(skill.bought, skill.cost)}</TableCell>
                                    <TableCell size="small" component="th" scope="row">{this.calculateNextCost(skill.bought, skill.cost, skill.max)}</TableCell>
                                </TableRow>
                            ))}
                            {jobs.map((job, index) => (
                                <React.Fragment>
                                <TableRow key={index}>
                                    <TableCell variant="head">{job.name}</TableCell>
                                    <TableCell variant="head">Base Cost</TableCell>
                                    <TableCell variant="head">Description</TableCell>
                                    <TableCell variant="head">Bought</TableCell>
                                    <TableCell variant="head">XP Cost</TableCell>
                                    <TableCell variant="head">Next Cost</TableCell>
                                </TableRow>
                                {job.skills.map((skill, i) => (
                                    <TableRow key={i}>
                                        <TableCell size="small" component="th" scope="row">{skill.name}</TableCell>
                                        <TableCell size="small" component="th" scope="row">{skill.cost}</TableCell>
                                        <TableCell size="small" component="th" scope="row">{skill.description}</TableCell>
                                        <TableCell size="small" component="th" scope="row">{skill.bought}</TableCell>
                                        <TableCell size="small" component="th" scope="row">{this.calculateXPCost(skill.bought, skill.cost)}</TableCell>
                                        <TableCell size="small" component="th" scope="row">{this.calculateNextCost(skill.bought, skill.cost, skill.max)}</TableCell>
                                    </TableRow>
                                ))}
                                </React.Fragment>
                            ))}
                            <TableRow>
                                <TableCell variant="head">Items</TableCell>
                                <TableCell variant="head">Type</TableCell>
                                <TableCell variant="head">Game Days Remaining</TableCell>
                                <TableCell variant="head" colspan={3}>Uses</TableCell>
                            </TableRow>
                            {items.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell size="small" component="th" scope="row">{item.name}</TableCell>
                                    <TableCell size="small" component="th" scope="row">{item.type}</TableCell>
                                    <TableCell size="small" component="th" scope="row">{this.renderItemBoxes(item)}</TableCell>
                                    <TableCell size="small" component="th" scope="row" colspan={3}>{this.renderItemUses(item)}</TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
                 
            </div>
        );
    }
}

//StaticCharPage.propTypes = {
//    classes: PropTypes.object.isRequired
//};

//export default withStyles(dashboardStyle)(StaticCharPage);
export default StaticCharPage;