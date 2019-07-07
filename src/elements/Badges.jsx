import axios from "axios";
import React, {Component} from "react";
import ProjectCard from "../components/ProjectCard";
import styled from "styled-components";
import tw from "tailwind.macro";

const BadgeWrapper = styled.div`
  width: 100%;
  ${tw`shadow-lg relative no-underline rounded-lg  md:py-12 text-white`};
  background: orange;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: scale(0.95);
  }
`;

const BadgeTitle = styled.div`
  ${tw`text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pb-4`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;
const Description = styled.div`
    ${tw`pb-4`};
`;

const Text = styled.div`
  ${tw`opacity-75 text-justify font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;
const Baseline=styled.p`
    ${tw`opacity-50 text-sm inset-x-0 bottom-0`};
    float:right;
`;

export class Badges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            badges: [],
            badgesId: [
                "GRz4cJRfQ2O-Y1clv1888g",
                "TqDuWHZIRi6VjTDKLeV-5Q",
                "OgwUUcD9QBaf64nt2bVm5A",
                "CZK2YbaaQnO9G2sBZVdxRQ",
                "bogZnt4GSzeLmG-_JwaOAg",
                "Dr2tuvmPQJSo7TYyTYgfCg",
                "hMf_iS6gSJW-ALzN75S2tg",
                "oyYFg20nQsCqkqgv2RerHA",
                "8wTiHCxVRciArgPhnK5CHg",
                "_a_0p_sUQdG1TxAPt2MftA",
                "jEzuXChTQ92EIWH7Pf_sNw",
                "9Z1yN4r1TyWyQ1QJTNiigw",
                "1b39d_5LTcebshue9BBu1g",
                "_jGAedy4TDu6SFIIaJ7Xog"
            ]
        }
        ;
    }

    componentWillMount() {
        try {
            this.state.badgesId.map(async el => {
                axios.get('https://api.badgr.io/public/badges/' + el).then(result => {
                    this.setState({
                            badges: [...this.state.badges, result.data]
                        }
                    )
                })

            })

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const badgesRender = this.state.badges.map((el, index) => {
            return (
                <BadgeWrapper className="badges" key={index} bg="orange">
                    <a href={el.id} target="_blank"  ><BadgeTitle>{el.name}</BadgeTitle>
                        <img className="badges-img" alt={el.title} src={el.image}/>
                    </a>
                    <Description><Text>{el.description}</Text></Description>
                    <Text>{el.criteria.narrative}</Text>
                    <Baseline>Badge from <a href={el.id} target="_blank">badgr</a> issued by <a href="https://www.becode.org/" target="_blank">BeCode</a></Baseline>
                </BadgeWrapper>

            )
        })

        return (<>{badgesRender}</>)
    }
}

// export const badges = badgesId.map(async el =>{
//     return await getBadgeById(el).then(result =>{
//         let badges = result;
//         return badges;
//     });
// })
// export const Badges = [
//     {
//         url:
//             "https://api.badgr.io/public/assertions/tToNVYemQ2u2Ezx_G62gfw?embedVersion=1"
//     },
//     {
//         url:
//             "https://api.badgr.io/public/assertions/25q8i88NSAOxPiiIbc7Xrg?embedVersion=1"
//     },
//     {
//         url:
//             "https://api.badgr.io/public/assertions/6TKNTGRHTZO-WFQfBmGb9g?embedVersion=1"
//     },
//     {
//         url:
//             "https://api.badgr.io/public/assertions/5YgEALZ1TJyPdNgtLwiSfQ?embedVersion=1"
//     },
//     {
//         url:
//             "https://api.badgr.io/public/assertions/raLAh1uSTnq5GC1Kd68tdw?embedVersion=1"
//     },
//     {
//         url:
//             "https://api.badgr.io/public/assertions/RKw_3HXIRmeD1ZFI6ZUkRQ?embedVersion=1"
//     },
//     {
//         url:
//             "https://api.badgr.io/public/assertions/MnccSnd1TrqR67JrZqM0cQ?embedVersion=1"
//     },
//     {
//         url:
//             "https://api.badgr.io/public/assertions/LoieeF5lTYiBaLw6U7FNAA?embedVersion=1"
//     },
//     {
//         url:
//             "https://api.badgr.io/public/assertions/lBHzRl78QR6KO9qkYkVxww?embedVersion=1"
//     },
//     {
//         url:
//             "https://api.badgr.io/public/assertions/rF9zuOWfTu-wKl4XhacsUA?embedVersion=1"
//     },
//     {
//         url:
//             "https://api.badgr.io/public/assertions/OqDaRwkFScqgoekHVTI2Kg?embedVersion=1"
//     },
//     {
//         url:
//             "https://api.badgr.io/public/assertions/03DXUGGSS1aWbSCT5PmnmQ?embedVersion=1"
//     }
// ];
