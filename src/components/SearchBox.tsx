import React, {useState} from 'react';
import {Card, Col, List, Row, Space, Typography} from "antd";
import Search from "antd/lib/input/Search";
import {ISearchArrays, ISearchState} from "../interfaces/store/SearchState";
import axios from 'axios';
import {connect} from "react-redux";
import {getSearch} from "../redux/actions/SearchAction";
import {Simulate} from "react-dom/test-utils";

function SearchBox(props:any){
    const [state,setState] = useState<ISearchState>(
        {
            q:"",
        }
    );
    function onChange(e:any){
        switch (e.target.name) {
            case "q":
                setState({...state,q:e.target.value})
                break;
        }
    }

    function onSearch(){
        const query = state.q
        props.onGetSearch(query)
    }
    const {loading,search} = props
     return (
        <React.Fragment>
            <Row>
                <Col span={24}>
                    &nbsp;
                </Col>
                <Col span={12} offset={6}>
                    <h5>Word Search Box:</h5>
                    <Search onKeyUp={onSearch} onChange={onChange} dir={"rtl"} placeholder="یک واژه یا عبارت بنویسید" loading={loading.loadingState ? true : false} name={'q'} value={state.q} />
                </Col>
              <Col span={24} offset={6}>
                  <Space direction="vertical">
                      <List

                          bordered
                          dataSource={search.searchResult}
                          renderItem={(item:any) => (
                              <List.Item style={{width: 800,textAlign:'right'}}>
                                  <Typography.Text mark>[aparat]</Typography.Text> {item.title}
                              </List.Item>
                          )}
                      />

                  </Space>
              </Col>
            </Row>


        </React.Fragment>
    );
}

const mapStateToProps = (state:any) => {
    return {
        search: state.search,
        loading: state.loading
    }
}
const mapDispatchToProps = ((dispatch:Function) => {
    return {
        onGetSearch: (query:string) => dispatch(getSearch(query))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(SearchBox);
