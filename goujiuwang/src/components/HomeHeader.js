import HomeSearch from "./HomeSearch";
import HomeHeaderBanner from "./HomeHeaderBanner";
import HomeNotice from "./HomeNotice";
import HomeGoodscCassify from "./HomeGoodscCassify";
import HomeOverSeckill from "./HomeOverSeckill";
import HomeSeckillGoods from "./HomeSeckillGoods";
import HomeAdvertising from "./HomeAdvertising";
import HomeContainer from "./HomeContainer";
import HomeGoodsList from "./HomeGoodsList";

import withAxios from "../hoc/withAxios";
import React,{Component} from "react";
class HomeHeader extends Component{
    constructor(){
        super();
        this.state={
            seckillGoods:[]
        }
    }
    async componentWillMount(){
        let res = await this.props.axios.get('/BtCApi/Home/SeckillList',{
            params:{
                userid:0
            }
        })
        this.setState({
            seckillGoods:res.data.data[0].AppSeckill
        })
    }
    render(){
        return (
            <div className="HomeHeader">
                <HomeSearch></HomeSearch>
                <HomeHeaderBanner></HomeHeaderBanner>
                <HomeNotice></HomeNotice>
                <HomeGoodscCassify></HomeGoodscCassify>
                <HomeOverSeckill seckillGoods={this.state.seckillGoods}></HomeOverSeckill>
                <HomeSeckillGoods goods={this.state.seckillGoods.AppSeckillProList}></HomeSeckillGoods>
                <HomeAdvertising></HomeAdvertising>
                <HomeContainer></HomeContainer>
                <HomeGoodsList></HomeGoodsList>
            </div>
        )
    }
}
HomeHeader = withAxios(HomeHeader)
export default HomeHeader;