import { useState } from "react";
import styled from "styled-components";


const Container = styled.div`
  width: 96vw;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NDg0NGisZHxkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALIBGgMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAAAQMCBAUG/8QAKRABAQEAAgADBwQDAAAAAAAAAAECAxEhcZESE0FRYbHwBDGBwRRCof/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6P9Lw9+U/e/L6PQxPhPDMTzO/CeGYvnw/qArjwX48/GpcWfjXTxwFMxbGS48OjGQGMqyCRqAOjkOQ5AEjQOQDkM5D6AAwBGYAiMAQ6a6HQM9FY10VgMVPStYoJVPStY0COolqL6idgIaiO46dRLWQce8ubly7uSOXkyDz+XCP+PfyPQvEPd/nQFOpPtFOLPxv8T5Mcef9tfxPkvxzsFeOduzhwnwcfo7ePIHjK2YMxsBDkEjUgCQw1IBSNyCRqQBIDHQDozIAR9H0DJ9H0fQF0Oj6PoGOirdZoJ2MVWxPUBOsWKWFYCNieovYncghYnuOjUS1Acu4jrDr1lK5Bze7P3f0XuWfZB5+PF2/p+PvyR/T8ffl93o8WAV48OjEYzFIDcajMbgHDKNQBI3IUjcgCRoH0BGYAgZgR9DowIzAEDICrNbZoMVixSwrASsZqljFgJ2M6itYsBDUT1F9RLUBCxmxbUT0COk1LC6gM8OHXiI8asoKyqZSytkG41GY3AajUZimYByNlDgGYAAxAAMdGABgCMACBkBEYBlmts0GLGLFKxYDFZsbrFBOxPUVqegR0lpXTFgJWF4NbqXYHmq4RwviAtiKSpSq5BTLcYypkG8txiKQDjRQwM4UMDMAAYAAAAAAAIyAEZUCKmVBmsVusUGKzWqzQYqWldJ2AlYluq7qOgS0x0pYz4AOOKSpSqZBbK2UcL4BTKkYjcBvLcYjUBqNQo1AOHAYAwAAAAAAAAAAAAiMgIqZUGaxW6zQYrFarNBip6U0loEtJ2K6T0CWmGtMegFlbCOItkFsrYRwvgFMtsStSg3G8sZUgNRuMxqAZiADAAAAAAAAAAAgABAgDJlQKp6btYoMUqdZoMVjTdT3QT0jpTVS3QS3evz9kPa81N+KYLZVwlhbALYVlRl6bzQWlbynlTIN5VylFMgpGozGoBwyMDAAAAAAAAIAAQAAgQCs06zQKsVqsUCZrTGqDOqjqt6qeqCe6hpTSegS0l7c+V9T5dejn94DuytL0jL0coLyq5QyrkF8qZSypkFYplKKZBSNxONwGjZMDBGAAAAAgMgABAgFKggDNOs0CrNOs2gVqWq1axqgxqparek9Axpz8mlOTTl5KCXLrtL2frG93rz+zn9ufUHozSmUM1XNB0Zquahmq5oL5VyjlXNBWKZSy3AVlbieWpQb7NmH2DQIAYIAYIAAQ7AECAUqCoCs0Vm0CtYtO1m0CtT1WtVPVBnVR3pvVQ3QT5Khu9eau705ebQIc2/z5ubu/Of8U5L6uX3nn6A9jNVzXNnS2KDqxVsOfC+aC+arlHKuaCua3E8tygpK3E43KDcOMRoGgQAwRgAQAAEAIFQBUFaBWsWnWKArFp1mgzqpareqlqgxqpbqmqhyUEuTTk5K6ORyc1/PmDl5ten3ct5Pqtz6cdoPcw6MAA6cLYABbKuQAUjcABuNwgDcOGAEMAAAAFAAFQABEABVmkAZZoAMVjRgEtJ0AEtI7ABz8rj5viADg5nMAD//2Q==")
      center;
  background-size: cover;
  display: flex;
  align-items: left;
  justify-content: left;
  margin-left:30px;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Wrapper2 = styled.div`
  width: 60%;
  height:60%;
  padding: 20px;
  border: 1px solid black;
`;


const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 2;
  min-width: 40%;
  margin: 10px 10px 0px 0px;
  padding: 10px;
`;
const Select = styled.select`
flex:2;
min-width: 40%;
margin: 10px 10px 0px 0px;
padding: 10px;
`;

const Selects = styled.select`
min-width: 100%;
margin: 10px 10px 0px 0px;
padding: 10px;

`;

const option = styled.option`
padding: 2px;
`;

const Button = styled.button`
  flex: 1;
  min-width: 50%;
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 400;
  margin: 10px 10px 0px 0px;
  padding: 10px;
`;

const Register = () => {
    const [business_stage, setBusiness_stage] = useState("");
    const [age_of_establishment, setAge_of_establishment] = useState(0);
    const [primary_product_service_offered, setPrimary_product_service_offered] = useState('')
    const [offered_to, setOffered_to] = useState('')
    const [secondary_product_service_offered, setSecondary_product_service_offered] = useState('')
    const [processed_products, setProcessed_products] = useState('')
    const [relevant_experience, setRelevant_experience] = useState(0)
    const [skill_training, setSkill_training] = useState('')
    const [usp, setUsp] = useState([]) //
    const [establishment_type, setEstablishment_type] = useState('')
    const [business_area, setBusiness_area] = useState('')
    const [business_locality, setBusiness_locality] = useState('')
    const [infra_ownership, setInfra_ownership] = useState('')
    const [establishment_area, setEstablishment_area] = useState(0)
    const [market_research, setMarket_research] = useState('')
    const [primary_market, setPrimary_market] = useState('')
    const [customers, setCustomers] = useState('')
    const [seasonality, setSeasonality] = useState('')
    const [competition, setCompetition] = useState('')
    const [suppliers, setSuppliers] = useState('')
    const [reason_for_location, Setreason_for_location]=useState([]);
    const [marketing_avenues,setMarketing_avenues] = useState([]);
    const [scaleup_potential, setScaleup_potential] = useState([]);

    function displayBusinessStage(e) {
        setBusiness_stage(e.target.value);
    }

    function setScaleup_potentials(e){
        setScaleup_potential([...scaleup_potential, e.target.value]);
    }
    function displayAgeOfEstablishment(e) {
        if (e.target.value < 0 || e.target.value > 100) {
            alert("Please select between 0 and 100")
        }
        else {
            setAge_of_establishment(e.target.value);
        }
    }
    function setMarketing_avenuess(e){
        setMarketing_avenues([...marketing_avenues,e.target.value])
    }
    function displayPrimaryProducts(e) {
        setPrimary_product_service_offered(e.target.value);
    }

    function Setreason_for_locations(e){
        Setreason_for_location([...reason_for_location, e.target.value])
    }
    function setUsps(e){
        setUsp([...usp,e.target.value])
    }
    function displayOffered_to(e) {
        setOffered_to(e.target.value)
    }
    function displaySecondary_product_service_offered(e) {
        setSecondary_product_service_offered(e.target.value);
    }
    function displayProcessed_products(e) {
        setProcessed_products(e.target.value)
    }
    function displayRelevant_experience(e) {
        setRelevant_experience(e.target.value);
    }
    function displaySkill_training(e) {
        setSkill_training(e.target.value);
    }
    function displayEstablishment_type(e) {
        setEstablishment_type(e.target.value);
    }
    function displayBusiness_area(e) {
        setBusiness_area(e.target.value);
    }
    function displayBusiness_locality(e) {
        setBusiness_locality(e.target.value)
    }
    function displayInfra_ownership(e) {
        setInfra_ownership(e.target.value)
    }
    function displayEstablishment_area(e) {
        setEstablishment_area(e.target.value);
    }
    function displayMarket_research(e) {
        setMarket_research(e.target.value);
    }
    function displayPrimary_market(e) {
        setPrimary_market(e.target.value);
    }
    function displayCustomers(e) {
        setCustomers(e.target.value);
    }
    function displaySeasonality(e) {
        setSeasonality(e.target.value);
    }
    function displayCompetition(e) {
        setCompetition(e.target.value);
    }
    function displaySuppliers(e) {
        setSuppliers(e.target.value);
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <Title>Introduction Section</Title>
                    <Form>
                        <Select name="business_stage" onChange={displayBusinessStage}>
                            <option disabled>business_stage</option>
                            <option>Start-up</option>
                            <option>Scale-up</option>
                        </Select>

                        <Input type="number" placeholder="Age of establishment (years)" name="age_of_establishment" min="0" max="100" onChange={displayAgeOfEstablishment} />
                        <Input type='text' placeholder='primary_product_service_offered' name='primary_product_service_offered' onChange={displayPrimaryProducts} />
                        <Select name="offered_to" onChange={displayOffered_to}>
                            <option disabled>Offered to</option>
                            <option>End customers</option>
                            <option>Wholesalers</option>
                            <option>Distributors</option>
                            <option>Retailers</option>
                        </Select>
                        <Input type="text" placeholder="Secondary Products/Services offfered" name="secondary_product_service_offered" onChange={displaySecondary_product_service_offered} />
                        <Input type="text" placeholder="Processed products (Products you produce from the raw materials)" name="processed_products" onChange={displayProcessed_products}/>
                        <Input type="number" placeholder="Years of relevant experience in this field" name="relevant_experience" onChange={displayRelevant_experience} />

                        <Select name="skill_training" onChange={displaySkill_training}>
                            <option disabled>Skill training</option>
                            <option>No formal skill training</option>
                            <option>Has formal skill training and certificate</option>
                        </Select>

                        <Selects multiple="multiple" name='usp' onClick={setUsps}>
                            <option disabled> Unique Selling Proposition </option>
                            <option>the entrepreneur's experience in this field</option>
                            <option>innovative product/service</option>
                            <option>high profit margin</option>
                            <option>high growth potential</option>
                            <option>superior customer support</option>
                            <option> quality and affordable products/service</option>
                            <option> high demand in the target market (forward linkage)</option>
                            <option>abundant supply of raw materials (backward linkage)</option>
                            <option>wide range of products/services, robust value-chain of the business</option>
                            <option>frequency of customer visits</option>
                        </Selects>

                        <Select name="establishment_type" onChange={displayEstablishment_type}>
                            <option disabled>Establishment type</option>
                            <option>Factory</option>
                            <option>Mill</option>
                            <option>Stall</option>
                            <option>Workshop</option>
                            <option>Boutique</option>
                            <option>Vehicle</option>
                            <option>Centre</option>
                            <option>Store</option>
                            <option>Farm</option>
                            <option>Processing </option>
                            <option>Unit</option>
                            <option>Shop</option>
                            <option>Vending </option>
                            <option>cart </option>
                            <option> Manufacturing unit </option>
                        </Select>

                        <Input type="text" placeholder="Name of the area" name="business_area" onChange={displayBusiness_area} />

                        <Select name="business_locality" onChange={displayBusiness_locality}>
                            <option disabled>Locality of business</option>
                            <option>Urban</option>
                            <option>Rural</option>
                            <option>Semi-urban</option>
                            <option>Slum</option>
                        </Select>

                        <Select name="infra_ownership" onChange={displayInfra_ownership}>
                            <option disabled>Ownership of infrastructure</option>
                            <option>Rented</option>
                            <option>Leased</option>
                            <option>Self-owned</option>
                        </Select>

                        <Input type="text" placeholder="Establishment area (in square feet) (Enter 0 if the establishment area is irrelevant)" name="establishment_area" onChange={displayEstablishment_area}/>

                        <Selects multiple="multiple" name="reason_for_location" onClick={Setreason_for_locations}>
                            <option disabled>Reason for selecting this location</option>
                            <option>Nearness to market</option>
                            <option>Good footfall</option>
                            <option>Nearness to source of raw materials</option>
                            <option>Nearness to targeted customer demographics</option>
                            <option> Lesser competition around</option>
                            <option>Access to permit/license of operate</option>
                            <option>Nearness to suppliers, Affordability (rent)</option>
                            <option> No rental overheads</option>
                            <option> Other such factors Screen reader support enabled</option>
                        </Selects>
                    </Form>

                    <Title>Target Market Section</Title>

                    <Form>
                        <Select name="market_research" onChange={displayMarket_research}>
                            <option disabled>Market research</option>
                            <option>Not conducted</option>
                            <option>Market research has been conducted </option>
                        </Select>

                        <Select name="primary_market" onChange={displayPrimary_market}>
                            <option disabled>Primary market</option>
                            <option>Local</option>
                            <option>Regional </option>
                            <option>National</option>
                            <option>International</option>
                        </Select>

                        <Input type="text" placeholder="Customers" name="customers" onChange={displayCustomers} />

                        <Select name="seasonality" onChange={displaySeasonality}>
                            <option disabled>Seasons of high sales</option>
                            <option>Consistent sales across all seasons</option>
                            <option> Higher sales in festive seasons </option>
                            <option>High sales in cropping/cultivation season</option>
                            <option>High sales in peak seasons</option>
                        </Select>

                        <Select name="competition" onChange={displayCompetition}>
                            <option disabled>Competition</option>
                            <option>No similar goods/service provider in this locality</option>
                            <option> Only a few similar goods/service providers in this locality</option>
                            <option>Many similar goods/service providers in this locality</option>
                        </Select>

                        <Input type="text" placeholder="List of Suppliers" name="suppliers" onChange={displaySuppliers} />

                        <Selects multiple="multiple" name='marketing_avenues' onClick={setMarketing_avenuess}>
                            <option disabled>Marketing avenues</option>
                            <option>Distribution of marketing material (pamphlets/flyers)</option>
                            <option>storefront/business branding</option>
                            <option>Seasonal discounts and offers</option>
                            <option>Cross-promotion</option>
                            <option>Digital Marketing</option>
                            <option>Word of mouth </option>
                        </Selects>

                        <Selects multiple="multiple" name='scaleup_potential' onClick={setScaleup_potentials}>
                            <option disabled>Avenues of scaling up in future</option>
                            <option>increasing the variety of product/service offering</option>
                            <option>expanding the current offering to other geographies</option>
                            <option>opening more outlets</option>
                            <option> growing the scale of operation</option>
                            <option> building value-chain integrations</option>
                            <option>other allied revenue streams</option>
                        </Selects>
                        <Button>Submit</Button>
                    </Form>
                </Wrapper>


                <Wrapper2>
                    <h1>DATA</h1>
                    <div style={{ textAlign:'left'}}>
                        <span><b>business_stage :</b> {business_stage}</span> 
                        <br/>  <span> <b>Age of establishment (years) : </b> {age_of_establishment}</span>
                        <br/> <span> <b>primary_product_service_offered: </b> {primary_product_service_offered}</span>
                        <br/> <span> <b>Offered to:  </b> {offered_to}</span>
                        <br/> <span> <b>Secondary Products/Services offfered : </b> {secondary_product_service_offered} </span>
                        <br/> <span> <b>Processed products : </b> {processed_products}</span>
                        <br/> <span><b> Years of relevant experience in this field : </b> {relevant_experience} </span>
                        <br/> <span> <b>Skill training: </b> {skill_training}</span>
                        <br/> <span><b>Unique Selling Proposition : </b> {usp} </span>
                        <br/> <span> <b>Establishment type : </b> {establishment_type}</span>
                        <br/> <span> <b>Name of the area : </b> {business_area}</span>
                        <br/> <span> <b>Locality of business : </b> {business_locality}</span>
                        <br/> <span> <b>Ownership of infrastructure : </b>{infra_ownership}</span>
                        <br/> <span> <b>Establishment area : </b> {establishment_area}</span>
                        <br /><span> <b>reason_for_location : </b> {reason_for_location}</span>
                    </div>
                    <div style={{ textAlign:'left',marginTop:'20px'}}>
                    <br/> <span> <b>Market research: </b> {market_research} </span>
                    <br/> <span> <b>Primary market : </b> {primary_market}</span>
                    <br/> <span> <b>Customers: </b> {customers}</span>
                    <br/> <span> <b>Seasons of high sales:</b> {seasonality}</span>
                    <br/> <span> <b>Competition : </b> {competition}</span>
                    <br/> <span> <b> List of Suppliers :</b> {suppliers}</span>
                    <br /><span> <b>marketing_avenues : </b> {marketing_avenues}</span>
                    <br/> <span> <b>Scaleup_potentials: </b> { scaleup_potential }</span>
                    </div>
                </Wrapper2>
            </Container>
        </>
    );
};

export default Register;