<template>
    <h1>Terms & Conditions</h1>
    <ul>
        <li>ALL Requests must be submitted at least 14 days prior to event date via our online booking system.</li>
        <li>Prices are based on a 1 hour appearance – Additional fees may apply if more than one hour.</li>
        <li>ALL appearances are paid. We do not offer any free appearances.</li>
    </ul>

    <h1>Spirit Appearance Fees</h1>
    <p class="middle-text">GENERAL APPEARANCES – Rates Per Appearance (All events outside of a TCU Athletic match are paid appearances. Mascot times will be determined by type of event, please contact office for more details.)</p>
    <el-table :data="tableData1" border stripe>
        <el-table-column prop="content" label="Category"></el-table-column>
        <el-table-column prop="price" label="Price"></el-table-column>
    </el-table>

    <p class="middle-text">DAY BEFORE GAME DAY – Rates Per appearance (Maximum of 1 hour appearances for Spirit Squads. Appearance location must be within 10 miles from TCU.)</p>
    <el-table :data="tableData2" border stripe>
        <el-table-column prop="content" label="Category"></el-table-column>
        <el-table-column prop="price" label="Price"></el-table-column>
    </el-table>

    <p>ON GAME DAYS – Appearances will not be accepted. We appreciate your understanding and apologize for any inconvenience.</p>

    <h1>General Terms:</h1>
    <ul>
        <li>Requests must be submitted at least 14 days prior to event date.</li>
        <li>TCU has until 5 days before the date of the appearance to accept or decline.</li>
        <li>Prices are based on a 1 hour event. Additional fees may apply if more than one hour.</li>
        <li>Appearances are only available in the DFW area.</li>
        <li>The SuperFrog suit will not be rented out to a third party.</li>
        <li>Due to university rules, TCU Spirit will not make appearances during dead (study) days, finals week, or major holidays including, but not limited to, New Years Eve and Day, MLK Day, 4th of July, Thanksgiving Day, Christmas Eve or Day.</li>
    </ul>
    
    <div class="backholder">
        <RouterLink :to="{ name: 'home' }"><p class="backtext">Back to Home Page</p></RouterLink>
    </div>
</template>

<script>
    import { RouterLink } from 'vue-router';
    export default {
        data() {
            return {
                tableData1: [
                    { content: '*30 minute SuperFrog appearance Flat Fee', price: '$75' },
                    { content: 'Texas Christian University On Campus', price: '' },
                    { content: 'SuperFrog', price: '$100' },
                    { content: 'Small Group of 2-3 Spirit Squad Members', price: '$100' },
                    { content: 'Large Group of 4-6 Spirit Squad Members	', price: '$150' },
                    { content: 'Public Schools or Non-Profit', price: '' },
                    { content: 'SuperFrog', price: '$100' },
                    { content: 'Small Group of 2-3 Spirit Squad Members', price: '$100' },
                    { content: 'Large Group of 4-6 Spirit Squad Members	', price: '$150' },
                    { content: 'Private or Residental', price: '' },
                    { content: 'SuperFrog', price: '$100' },
                    { content: 'Small Group of 2-3 Spirit Squad Members', price: '$100' },
                    { content: 'Large Group of 4-6 Spirit Squad Members	', price: '$150' },
                ],
                tableData2: [
                    { content: '*30 minute SuperFrog appearance Flat Fee', price: '$150' },
                    { content: 'Texas Christian University On Campus', price: '' },
                    { content: 'SuperFrog', price: '$200' },
                    { content: 'Small Group of 2-3 Spirit Squad Members', price: '$150' },
                    { content: 'Large Group of 4-6 Spirit Squad Members	', price: '$200' },
                    { content: 'Public Schools or Non-Profit', price: '' },
                    { content: 'SuperFrog', price: '$200' },
                    { content: 'Small Group of 2-3 Spirit Squad Members', price: '$150' },
                    { content: 'Large Group of 4-6 Spirit Squad Members	', price: '$200' },
                    { content: 'Private or Residental', price: '' },
                    { content: 'SuperFrog', price: '$200' },
                    { content: 'Small Group of 2-3 Spirit Squad Members', price: '$150' },
                    { content: 'Large Group of 4-6 Spirit Squad Members	', price: '$200' },
                ],
            }
        }
    }
</script>

<style>
    h1 {
        margin-top: 20px;
        margin-bottom: 25px;
        font-size: 50px;
    }

    li, p {
        font-size: 25px;
    }

    .middle-text {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .backtext {
        font-size: 15px;
        font-weight: 200;
    }
    .backholder {
        border: 1.5px solid blue;
        border-radius: 15px;
        background-color: ghostwhite;
        display: grid;
        align-items: center;
        text-align: center;
        width: 170px;
        height: 50px;
        margin: 30px;
    }

    .backholder:hover {
        border: 1.5px solid orangered;
        background-color: blueviolet;   
        font-weight: 700;
    }
</style>