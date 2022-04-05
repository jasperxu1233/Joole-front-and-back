import React from "react";
import {connect} from "react-redux"
import {auth, returnToSearch} from "../../actions/action";
import {Button, Collapse, Slider, InputNumber, Row, Col, Table, Tag, Space, Card } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

// const {id} = this.props.productList.id;

const gridStyle = {
    width: '25%',
    textAlign: 'center',
    display : "inline-block",
    float : "right",
};

class ListContent extends React.Component {

    state = {
        // num : 0,
        AirflowinputValue: 2000,
        PowerinputValue: 9.84,
        SpeedinputValue: 20,
        DiameterinputValue : 18,
        FirminputValue : 0,
        GlobalinputValue : 0,
    };

    // columns = [
    //     {
    //         title : 'id',
    //         dataIndex: 'id',
    //         key: 'id',
    //     },
    //     {
    //         title : 'manufacturer',
    //         dataIndex: 'manufacturer',
    //         key: 'manufacturer',
    //     },
    //     {
    //         title : 'accessories',
    //         dataIndex: 'accessories',
    //         key: 'accessories',
    //     },
    //     {
    //         title : 'airflow',
    //         dataIndex: 'airflow',
    //         key: 'airflow',
    //     },
    //     {
    //         title : 'fanSpeedMax',
    //         dataIndex: 'fanSpeedMax',
    //         key: 'fanSpeedMax',
    //     },
    //     {
    //         title : 'fanSpeedMin',
    //         dataIndex: 'fanSpeedMin',
    //         key: 'fanSpeedMin',
    //     },
    //     {
    //         title : 'heightMax',
    //         dataIndex: 'heightMax',
    //         key: 'heightMax',
    //     },
    //     {
    //         title : 'heightMin',
    //         dataIndex: 'heightMin',
    //         key: 'heightMin',
    //     },
    //     {
    //         title : 'powerMax',
    //         dataIndex: 'powerMax',
    //         key: 'powerMax',
    //     },
    //     {
    //         title : 'powerMin',
    //         dataIndex: 'powerMin',
    //         key: 'powerMin',
    //     },
    // ];

    // onPluse = () => {
    //     this.setState((state) => {
    //         return{
    //             num : state.num + 1,
    //         }
    //     })
    // }

    // data = [
    //     this.props.productList.map((item) => {
    //         this.onPluse();
    //             return {
    //                 // key : this.state.num,
    //                 id : item.id,
    //                 manufacturer : item.manufacturer,
    //                 accessories : item.accessories,
    //                 airflow : item.airflow,
    //                 fanSpeedMax : item.fanSpeedMax,
    //                 fanSpeedMin : item.fanSpeedMin,
    //                 heightMax : item.heightMax,
    //                 heightMin : item.heightMin,
    //                 powerMax : item.powerMax,
    //                 powerMin : item.powerMin,
    //             };
    //         },
    //     )
    // ];

    // onReturn = () => {
    //     this.props.returnToSearch();
    // }

    // callback =(key) => {
    //     console.log(key);
    // }

    onChangeAirflow = value => {
        this.setState({
            AirflowinputValue: value,
        });
    };

    onChangePower = value => {
        this.setState({
            PowerinputValue: value,
        });
    };

    onChangeSpeed = value => {
        this.setState({
            SpeedinputValue: value,
        });
    };

    onChangeDiameter = value => {
        this.setState({
            DiameterinputValue: value,
        });
    };

    onChangeFirm = value => {
        this.setState({
            FirminputValue: value,
        });
    };

    onChangeGlobal = value => {
        this.setState({
            GlobalinputValue: value,
        });
    };

    render() {
        return(
            <div>
                <div
                    style={{display : "block"}}
                >
                    <div
                        style={{
                            display : "block",
                        }}
                    >
                        <Collapse defaultActiveKey={['1']}
                            // onChange={this.callback}
                                  style={{
                                      // display : "inline-block",
                                      width : 300,
                                      float : "left"
                                  }}>
                            <Panel header="Product Type" key="1">
                                <div>
                                    Model year:
                                    <input style={{width:50, margin : 10,}}/>
                                    -
                                    <input style={{width:50, margin : 10,}}/>
                                </div>
                            </Panel>

                            <Panel header="Technical Specifications" key="2">
                                <div>
                                    AIR FLOW(CFM)
                                </div>
                                <Row>
                                    <Col span={12}>
                                        <Slider
                                            min={2000}
                                            max={10000}
                                            onChange={this.onChangeAirflow}
                                            value={typeof this.state.AirflowinputValue === 'number' ? this.state.AirflowinputValue : 0}
                                        />
                                    </Col>
                                    <Col span={4}>
                                        <InputNumber
                                            min={2000}
                                            max={10000}
                                            style={{ margin: '0 16px' }}
                                            value={this.state.AirflowinputValue}
                                            onChange={this.onChangeAirflow}
                                        />
                                    </Col>
                                </Row>

                                <div>
                                    MAX POWER(W)
                                </div>
                                <Row>
                                    <Col span={12}>
                                        <Slider
                                            min={9.84}
                                            max={96.52}
                                            onChange={this.onChangePower}
                                            value={typeof this.state.PowerinputValue === 'number' ? this.state.PowerinputValue : 0}
                                            step={0.01}
                                        />
                                    </Col>
                                    <Col span={4}>
                                        <InputNumber
                                            min={9.84}
                                            max={96.52}
                                            style={{ margin: '0 16px' }}
                                            step={0.01}
                                            value={this.state.PowerinputValue}
                                            onChange={this.onChangePower}
                                        />
                                    </Col>
                                </Row>

                                <div>
                                    Sound at max speed(dBA)
                                </div>
                                <Row>
                                    <Col span={12}>
                                        <Slider
                                            min={20}
                                            max={80}
                                            onChange={this.onChangeSpeed}
                                            value={typeof this.state.SpeedinputValue === 'number' ? this.state.SpeedinputValue : 0}
                                        />
                                    </Col>
                                    <Col span={4}>
                                        <InputNumber
                                            min={20}
                                            max={80}
                                            style={{ margin: '0 16px' }}
                                            value={this.state.SpeedinputValue}
                                            onChange={this.onChangeSpeed}
                                        />
                                    </Col>
                                </Row>

                                <div>
                                    Fan sweep diameter(in)
                                </div>
                                <Row>
                                    <Col span={12}>
                                        <Slider
                                            min={18}
                                            max={96}
                                            onChange={this.onChangeDiameter}
                                            value={typeof this.state.DiameterinputValue === 'number' ? this.state.DiameterinputValue : 0}
                                        />
                                    </Col>
                                    <Col span={4}>
                                        <InputNumber
                                            min={18}
                                            max={96}
                                            style={{ margin: '0 16px' }}
                                            value={this.state.DiameterinputValue}
                                            onChange={this.onChangeDiameter}
                                        />
                                    </Col>
                                </Row>
                            </Panel>

                            <Panel header="Brand" key="3">
                                <p>{text}</p>
                            </Panel>
                            <Panel header="Past Selections" key="4">
                                <div>
                                    Firm
                                </div>
                                <Row>
                                    <Col span={12}>
                                        <Slider
                                            min={0}
                                            max={10}
                                            onChange={this.onChangeFirm}
                                            value={typeof this.state.FirminputValue === 'number' ? this.state.FirminputValue : 0}
                                        />
                                    </Col>
                                    <Col span={4}>
                                        <InputNumber
                                            min={0}
                                            max={10}
                                            style={{ margin: '0 16px' }}
                                            value={this.state.FirminputValue}
                                            onChange={this.onChangeFirm}
                                        />
                                    </Col>
                                </Row>

                                <div>
                                    Global
                                </div>
                                <Row>
                                    <Col span={12}>
                                        <Slider
                                            min={0}
                                            max={1492}
                                            onChange={this.onChangeGlobal}
                                            value={typeof this.state.GlobalinputValue === 'number' ? this.state.GlobalinputValue : 0}
                                        />
                                    </Col>
                                    <Col span={4}>
                                        <InputNumber
                                            min={0}
                                            max={1492}
                                            style={{ margin: '0 16px' }}
                                            value={this.state.GlobalinputValue}
                                            onChange={this.onChangeGlobal}
                                        />
                                    </Col>
                                </Row>
                            </Panel>
                            <Panel header="Certifications" key="5">
                                <p>{text}</p>
                            </Panel>
                        </Collapse>

                    </div>

                    {/*<Table columns={this.columns} dataSource={this.data}*/}
                    {/*       style={{*/}
                    {/*           display:"inline-block",*/}
                    {/*           // marginTop : -10,*/}
                    {/*           float : "top"*/}
                    {/*       }}*/}
                    {/*/>*/}

                    <div
                        style={{
                            display : "block",
                        }}
                    >
                        {
                            this.props.productList.map((item) => {
                                return <Card
                                    style={{display : "inline-block", float:"left",}}
                                >
                                    <p>
                                        Id : {item.id}
                                    </p>
                                    <p>
                                        manufacturer : {item.manufacturer}
                                    </p>
                                    <p>
                                        accessories : {item.accessories}
                                    </p>
                                    <p>
                                        airflow : {item.airflow}
                                    </p>
                                    <p>
                                        fanSpeedMax : {item.fanSpeedMax}
                                    </p>
                                    <p>
                                        fanSpeedMin : {item.fanSpeedMin}
                                    </p>
                                    <p>
                                        heightMax : {item.heightMax}
                                    </p>
                                    <p>
                                        heightMin : {item.heightMin}
                                    </p>
                                    <p>
                                        powerMax : {item.powerMax}
                                    </p>
                                    <p>
                                        powerMin : {item.powerMin}
                                    </p>
                                </Card>
                            })
                        }

                        {/*<Card title="Card Title">*/}
                        {/*    {*/}
                        {/*        this.props.productList.map((item) => {*/}
                        {/*            return <Card.Grid hoverable={false} style={gridStyle}>*/}
                        {/*                item*/}
                        {/*            </Card.Grid>*/}
                        {/*        })*/}
                        {/*    }*/}
                        {/*    /!*<Card.Grid hoverable={false} style={gridStyle}>*!/*/}
                        {/*    /!*    Content*!/*/}
                        {/*    /!*</Card.Grid>*!/*/}
                        {/*    /!*<Card.Grid style={gridStyle}>Content</Card.Grid>*!/*/}
                        {/*</Card>*/}
                    </div>

                </div>

                {/*<div style={{*/}
                {/*    display : "block",*/}
                {/*}}>*/}
                {/*    <Button*/}
                {/*        onClick={this.onReturn}*/}
                {/*        style={{*/}
                {/*            display:"inline-block",*/}
                {/*            float : "right",*/}
                {/*            margin : 100,*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        return*/}
                {/*    </Button>*/}
                {/*</div>*/}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        productList: state.productList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        returnToSearch : () => dispatch(returnToSearch()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListContent)