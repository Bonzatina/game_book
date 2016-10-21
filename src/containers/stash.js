

/**
 * Created by korolev on 10.10.2016.
 */

import React, {Component, PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TimePicker from 'material-ui/TimePicker';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

export default class DeliveryCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titleIsSet: false,
            descriptionRecipientIsSet: false,
            descriptionSenderIsSet: false,
            activeButton1: ' active_button',
            activeButton2: '',
            activeButton3: '',
            buyout: false,
            taskForCourier: false,
            descriptionSender: false,
            cargoList: [],
            delivery: {
                weight: 2.5,
                buyout: false,
                requirePhoto: false,
                deliveryType: 'turbo',
                dayPickUp: 1,
                dayDrop: 1,
                paymentType: 'account',
            },
        };
    }

    handleTitleSet() {
        this.setState({titleIsSet: !this.state.titleIsSet});
    };

    handleTitleUnset() {
        this.setState({
            titleIsSet: !this.state.titleIsSet,
            delivery: {...this.state.delivery, title: false}
        });
    };

    handleDescriptionSenderSet() {
        this.setState({
            descriptionSenderIsSet: !this.state.descriptionSenderIsSet,
            delivery: {...this.state.delivery, descriptionSender: false}
        });
    };

    handleDescriptionRecipientSet() {
        this.setState({
            descriptionRecipientIsSet: !this.state.descriptionRecipientIsSet,
            delivery: {...this.state.delivery, description_recipient: false}
        });
    };

    handlePolyRecipientsSet() {
        this.setState({poly_recipints: !this.state.poly_recipints});
    };

    handleTitleField(event, value) {
        this.setState({delivery: {...this.state.delivery, title: value}})
    };

    handleDescriptionSenderField(event, value) {
        this.setState({delivery: {...this.state.delivery, descriptionSender: value}})
    };

    handleDescriptionRecipientField(event, value) {
        this.setState({delivery: {...this.state.delivery, description_recipient: value}})
    };


    handleDeliveryType1() {
        this.setState({
            activeButton1: " active_button", activeButton2: "", activeButton3: "",
            delivery: {...this.state.delivery, deliveryType: 'turbo'}
        });
    };

    handleDeliveryType2() {
        this.setState({
            activeButton1: "", activeButton2: " active_button", activeButton3: "",
            delivery: {...this.state.delivery, deliveryType: 'up_to_time'}
        });
    };

    handleDeliveryType3() {
        this.setState({
            activeButton1: "", activeButton2: "", activeButton3: " active_button",
            delivery: {...this.state.delivery, deliveryType: 'day_to_day'}
        });
    };

    handleDayChange1 = (event, index, value) => {
        this.setState({
            delivery: {
                ...this.state.delivery,
                dayPickUp: value
            }
        });
    };

    handleDayChange2 = (event, index, value) => {
        this.setState({
            delivery: {
                ...this.state.delivery,
                dayDrop: value
            }
        });
    };

    handleBuyoutToggle() {
        let buyoutAmount = !this.state.delivery.buyout ? this.state.delivery.buyout_amount : 0;
        this.setState({buyout: !this.state.buyout});
    };

    handleTaskForCourierToggle() {
        this.setState({task_for_courier: !this.state.task_for_courier});
    };

    handlePhotoRequire() {
        this.setState({photo_requirer: !this.state.photo_requirer});
    };

    handleOneMoreCargoSet() {
        let cargoList = this.state.cargoList;
        var lastCargo = cargoList[cargoList.length - 1] ? cargoList[cargoList.length - 1] : 1;
        cargoList.push(lastCargo + 1);

        this.setState({cargoList: cargoList});
    };

    handleCargoUnset(event, index, value) {
        let cargoList = this.state.cargoList;
        var lastCargo = cargoList[cargoList.length - 3];
        cargoList.splice(lastCargo, 1);

        this.setState({cargoList: cargoList});
    };

    handleCashBackRequire() {
        this.setState({cash_back: !this.state.cash_back});
    };


    render() {

        const textFieldStyles = {
            rootStyle: {
                width: 'none',
                height: 'inherit',
                lineHeight: 'none'
            },

            inputStyle: {
                marginTop: '0',
                top: '5px'
            },

            hintStyle: {
                fontSize: '14px',
                top: '10px'
            },
            floatingLabelFocusStyle: {
                top: '20px'
            },

            titleHintStyle: {
                top: '5px',
                fontSize: '14px'
            },
            textareaStyle: {
                width: 'inherit',
                marginTop: '-3px',
                minHeight: '70px'

            },
            chooseDayStyle: {
                marginTop: '-20px',
                height: '40px',
                width: '100%',
                borderTop: '0px',
                underlineStyle: {
                    borderTop: '0px',
                }
            },
            chooseTimeStyle: {
                marginTop: '-10px',
                height: '33px',

            },
            inputTimeStyle: {
                width: '80px'
            },


            narrowTextFieldStyle: {
                rootStyle: {
                    height: '30px',
                    paddingBottom: '5px'
                },
                hintStyle: {
                    paddingTop: '10px',
                    fontSize: '14px'
                }
            }

        };

        const checkBoxesStyle = {};

        const buttonStyles = {
            button: {
                height: '40px',
                width: '228px',
                margin: '30px',
                marginLeft: '30px'
            },
            labelStyle: {
                color: '#f58b3c',
                paddingTop: '5px',
                top: '7px',
                textTransform: 'none'
            },
            labelFinalButtonlStyle: {
                color: 'white',
                paddingTop: '5px',
                top: '7px',
                textTransform: 'none'
            }

        };

        let topRow = <div className="top_panel">
            <div className="top_text">Доставка №23230</div>

            {this.state.titleIsSet ?
                <div className="top_panel__text">
                    <Paper zDepth={1} className="dlv_title"> <TextField
                        hintText="Название доставки"

                        underlineShow={false}
                        onChange={this.handleTitleField.bind(this)}

                        hintStyle={textFieldStyles.titleHintStyle}
                        style={textFieldStyles.rootStyle} /> </Paper>

                    <div className="top_panel__text"
                         onClick={this.handleTitleSet.bind(this)}>Сохранить
                    </div>
                    <div className="top_panel__text"
                         onClick={this.handleTitleUnset.bind(this)}>Отменить
                    </div>
                </div>
                :
                <div className="dlv_title"
                     onClick={this.handleTitleSet.bind(this)}>
                    {this.state.delivery.title ? this.state.delivery.title : 'Придумать название'}</div>
            }
        </div>;

        let senderRow = <div> <div className="row details_row">
            <div className="col-sm-2 col-md-2 details_row__left_area">
                <div >Отправитель</div>
                {/* <a >Выбрать</a> */}
            </div>

            <Paper zDepth={1} className="col-xs-12 col-sm-10 col-md-10 white_area">


                <div>
                    <TextField className="col-xs-8 col-sm-8 col-md-8 cell"

                               floatingLabelText="Имя"

                               style={textFieldStyles.rootStyle}
                               inputStyle={textFieldStyles.inputStyle}
                               floatingLabelStyle={textFieldStyles.hintStyle}
                               floatingLabelFocusStyle={textFieldStyles.floatingLabelFocusStyle}

                               underlineShow={false} />

                    <TextField className="col-xs-4 col-sm-4 col-md-4 cell"

                               floatingLabelText="Телефон"

                               type="tel"
                               pattern="2[0-9]{3}-[0-9]{3}"
                               style={textFieldStyles.rootStyle}
                               inputStyle={textFieldStyles.inputStyle}
                               floatingLabelStyle={textFieldStyles.hintStyle}
                               floatingLabelFocusStyle={textFieldStyles.floatingLabelFocusStyle}
                               underlineShow={false} />

                </div>

                <div>

                    <TextField className="col-xs-3 col-sm-3 col-md-3 cell"

                               floatingLabelText="Метро"

                               style={textFieldStyles.rootStyle}
                               inputStyle={textFieldStyles.inputStyle}
                               floatingLabelStyle={textFieldStyles.hintStyle}
                               floatingLabelFocusStyle={textFieldStyles.floatingLabelFocusStyle}
                               underlineShow={false} />

                    <TextField className="col-xs-5 col-sm-5 col-md-5 cell"

                               floatingLabelText="Адрес"

                               style={textFieldStyles.rootStyle}
                               inputStyle={textFieldStyles.inputStyle}
                               floatingLabelStyle={textFieldStyles.hintStyle}
                               floatingLabelFocusStyle={textFieldStyles.floatingLabelFocusStyle}
                               underlineShow={false} />

                    <TextField className="col-xs-2 col-sm-2 col-md-2 cell"

                               floatingLabelText="Подъезд"

                               style={textFieldStyles.rootStyle}
                               inputStyle={textFieldStyles.inputStyle}
                               floatingLabelStyle={textFieldStyles.hintStyle}
                               floatingLabelFocusStyle={textFieldStyles.floatingLabelFocusStyle}
                               underlineShow={false} />

                    <TextField className="col-xs-2 col-sm-2 col-md-2 cell"

                               floatingLabelText="Квартира"

                               style={textFieldStyles.rootStyle}
                               inputStyle={textFieldStyles.inputStyle}
                               floatingLabelStyle={textFieldStyles.hintStyle}
                               floatingLabelFocusStyle={textFieldStyles.floatingLabelFocusStyle}
                               underlineShow={false} />
                </div>

            </Paper>
        </div>
            <div className="row details_row">
                { this.state.descriptionSenderIsSet ?
                    <div className="col-xs-2 col-sm-2 col-md-2 description_left_area"
                         onClick={this.handleDescriptionSenderSet.bind(this)}>
                        <div>Отменить</div>
                    </div>
                    :
                    <div className="col-sm-2 col-md-2"></div> }


                { this.state.descriptionSenderIsSet ?
                    <div className="col-xs-12 col-sm-10 col-md-10 description_area">
                        <Paper zDepth={1} className="cell"> <TextField
                            className=" "
                            hintText=""
                            multiLine={true}
                            rows={2}
                            rowsMax={2}
                            textareaStyle={textFieldStyles.textareaStyle}
                            fullWidth={true}
                            underlineShow={false}
                            onChange={this.handleDescriptionSenderField.bind(this)}
                        /> </Paper>
                    </div>
                    :
                    <div className=" col-xs-12 col-sm-10 col-md-10 description_area_button"
                         onClick={this.handleDescriptionSenderSet.bind(this)}>
                        {!this.state.descriptionSenderIsSet ? '+ Описание' : null}</div> }</div>

        </div>;

        let recipientRow = <div>

            {/* <div className="row details_row">

             <Checkbox style={{left: '-7px'}}
             onClick={this.handlePolyRecipientsSet.bind(this)}
             label="несколько получателей"
             />
             </div> */}

            <div className="row details_row">
                <div className="col-sm-2 col-md-2 details_row__left_area">
                    <div >Получатель</div>
                    {/* <a >Выбрать</a> */}
                </div>


                <Paper zDepth={1} className="col-xs-12 col-sm-10 col-md-10 white_area" style={this.state.poly_recipints ? {height: '40px'} : null}>

                    {!this.state.poly_recipints ? <div>
                        <TextField className="col-xs-8 col-sm-8 col-md-8 cell"

                                   floatingLabelText="Имя"

                                   style={textFieldStyles.rootStyle}
                                   inputStyle={textFieldStyles.inputStyle}
                                   floatingLabelStyle={textFieldStyles.hintStyle}
                                   floatingLabelFocusStyle={textFieldStyles.floatingLabelFocusStyle}

                                   underlineShow={false} />

                        <TextField className="col-xs-4 col-sm-4 col-md-4 cell"

                                   floatingLabelText="Телефон"

                                   style={textFieldStyles.rootStyle}
                                   inputStyle={textFieldStyles.inputStyle}
                                   floatingLabelStyle={textFieldStyles.hintStyle}
                                   floatingLabelFocusStyle={textFieldStyles.floatingLabelFocusStyle}
                                   underlineShow={false} />
                    </div> : null}


                    <div>

                        <TextField className="col-xs-3 col-sm-3 col-md-3 cell"

                                   floatingLabelText="Метро"

                                   style={textFieldStyles.rootStyle}
                                   inputStyle={textFieldStyles.inputStyle}
                                   floatingLabelStyle={textFieldStyles.hintStyle}
                                   floatingLabelFocusStyle={textFieldStyles.floatingLabelFocusStyle}
                                   underlineShow={false} />

                        <TextField className="col-xs-5 col-sm-5 col-md-5 cell"

                                   floatingLabelText="Адрес"

                                   style={textFieldStyles.rootStyle}
                                   inputStyle={textFieldStyles.inputStyle}
                                   floatingLabelStyle={textFieldStyles.hintStyle}
                                   floatingLabelFocusStyle={textFieldStyles.floatingLabelFocusStyle}
                                   underlineShow={false} />

                        <TextField className="col-xs-2 col-sm-2 col-md-2 cell"

                                   floatingLabelText="Подъезд"

                                   style={textFieldStyles.rootStyle}
                                   inputStyle={textFieldStyles.inputStyle}
                                   floatingLabelStyle={textFieldStyles.hintStyle}
                                   floatingLabelFocusStyle={textFieldStyles.floatingLabelFocusStyle}
                                   underlineShow={false} />

                        <TextField className="col-xs-2 col-sm-2 col-md-2 cell"

                                   floatingLabelText="Квартира"

                                   style={textFieldStyles.rootStyle}
                                   inputStyle={textFieldStyles.inputStyle}
                                   floatingLabelStyle={textFieldStyles.hintStyle}
                                   floatingLabelFocusStyle={textFieldStyles.floatingLabelFocusStyle}
                                   underlineShow={false} />
                    </div>

                </Paper>
            </div>


            <div className="row details_row">

                { this.state.descriptionRecipientIsSet ?
                    <div className="col-xs-2 col-sm-2 col-md-2 description_left_area"
                         onClick={this.handleDescriptionRecipientSet.bind(this)}>
                        <div>Отменить</div>
                    </div> :
                    <div className="col-sm-2 col-md-2"></div> }


                { this.state.descriptionRecipientIsSet ?
                    <div className="col-xs-12 col-sm-10 col-md-10 description_area">
                        <Paper zDepth={1} className="cell"> <TextField
                            className=" "
                            hintText=""
                            multiLine={true}
                            rows={2}
                            rowsMax={2}
                            textareaStyle={textFieldStyles.textareaStyle}
                            fullWidth={true}
                            underlineShow={false}
                            onChange={this.handleDescriptionRecipientField.bind(this)}
                        /> </Paper>
                    </div> :
                    <div className=" col-xs-12 col-sm-10 col-md-10 description_area_button"
                         onClick={this.handleDescriptionRecipientSet.bind(this)}>
                        {!this.state.descriptionRecipientIsSet ? '+ Описание' : null}
                    </div> }
            </div>
        </div>;


        let deliveryTypeRow =
            <div className="row details_row">
                <div className="col-sm-2 col-md-2 details_row__left_area">
                    <div className="delivery_type_text">Тип доставки</div>

                </div>

                <Paper zDepth={1} className="col-xs-12 col-sm-10 col-md-10 delivery_type">

                    <div className={"col-xs-4 col-sm-4 col-md-4 cell" + this.state.activeButton1}
                         onClick={this.handleDeliveryType1.bind(this)}>
                        <div className="top_text">Турбо 90</div>
                        <p>Срочная доставка за 90 минут</p>
                    </div>


                    <div className={"col-xs-4 col-sm-4 col-md-4 cell" + this.state.activeButton2}
                         onClick={this.handleDeliveryType2.bind(this)}>
                        <div className="top_text">Ко времени</div>
                        <p>Доставка к определенному времени</p>
                    </div>


                    <div className={"col-xs-4 col-sm-4 col-md-4 cell" + this.state.activeButton3}
                         onClick={this.handleDeliveryType3.bind(this)}>
                        <div className="top_text">День-в-день</div>
                        <p>Доставка в течение дня</p>
                    </div>
                </Paper>

            </div>;


        let deliveryTimeRow =
            <div className="row details_row">
                <div className="col-sm-2 col-md-2 details_row__left_area">
                    <div >Время доставки</div>

                </div>
                <Paper zDepth={1} className="col-xs-12 col-sm-10 col-md-10 white_area">

                    <div>
                        <div className="col-xs-8 col-sm-8 col-md-8 cell">
                            <DropDownMenu
                                autoWidth={false}
                                style={textFieldStyles.chooseDayStyle}
                                underlineStyle={textFieldStyles.chooseDayStyle.underlineStyle}
                                value={this.state.delivery.dayPickUp}
                                onChange={this.handleDayChange1}>
                                <MenuItem value={1} primaryText="Сегодня" />
                                <MenuItem value={2} primaryText="Завтра" />
                            </DropDownMenu>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 cell">
                            <TimePicker
                                format="24hr"
                                hintText="с"
                                style={textFieldStyles.chooseTimeStyle}
                                textFieldStyle={textFieldStyles.inputTimeStyle}
                            />
                        </div>

                        <div className="col-xs-2 col-sm-2 col-md-2 cell">
                            <TimePicker
                                format="24hr"
                                hintText="до"
                                style={textFieldStyles.chooseTimeStyle}
                                textFieldStyle={textFieldStyles.inputTimeStyle}
                            />
                        </div>

                    </div>
                    <div>
                        <div className="col-xs-8 col-sm-8 col-md-8 cell">
                            <DropDownMenu
                                autoWidth={false}
                                underlineStyle={textFieldStyles.chooseDayStyle.underlineStyle}
                                style={textFieldStyles.chooseDayStyle}
                                value={this.state.delivery.dayDrop}
                                onChange={this.handleDayChange2}
                            >
                                <MenuItem value={1} primaryText="Сегодня" />
                                <MenuItem value={2} primaryText="Завтра" />
                            </DropDownMenu>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 cell">
                            <TimePicker
                                format="24hr"
                                hintText="с"
                                style={textFieldStyles.chooseTimeStyle}
                                textFieldStyle={textFieldStyles.inputTimeStyle}
                            />
                        </div>

                        <div className="col-xs-2 col-sm-2 col-md-2 cell">
                            <TimePicker
                                format="24hr"
                                hintText="до"
                                style={textFieldStyles.chooseTimeStyle}
                                textFieldStyle={textFieldStyles.inputTimeStyle}
                            />
                        </div>

                    </div>

                </Paper>
            </div>;

        const hint_img = require('../../Beaglexpress/img/hint.png');
        const specOptionsRow = <div className="row details_row">
            <div className="col-sm-2 col-md-2 details_row__left_area">


            </div>

            <div className="checkbox__container">

                <div >
                    <div className="checkbox_item">
                        <Checkbox
                            onClick={this.handleBuyoutToggle.bind(this)}
                            label=""
                            style={{width: '13%'}}
                        />
                    </div>

                    <div className="checkbox_label">выкупить груз у отправителя</div>
                    <img src={hint_img} className="hint" />
                </div>


                <div>
                    <div className="checkbox_item">
                        <Checkbox
                            style={{width: '13%'}}
                            label=""
                        />
                    </div>

                    <div className="checkbox_label" >доставка на авто</div>
                    <img src={hint_img} className="hint" />
                </div>


                <div >
                    <div className="checkbox_item">
                        <Checkbox
                            onClick={this.handleTaskForCourierToggle.bind(this)}
                            label=""
                            style={{width: '13%'}}
                        />
                    </div>

                    <div className="checkbox_label" >задание для курьера</div>
                    <img src={hint_img} className="hint" />
                </div>

            </div>
        </div>;


        const cargoDetailsRow = (id) => (<div className="row details_row" id={id}>


            {this.state.task_for_courier ? <div>
                <div className="col-sm-2 col-md-2 details_row__left_area">
                </div>

                <div className="col-xs-12 col-sm-10 col-md-10 description_area" style={{height: '30px'}}>
                    <Paper zDepth={1} className="cell"> <TextField
                        className=" "
                        hintText="Придумайте изощренное задание для курьера"

                        style={textFieldStyles.narrowTextFieldStyle.rootStyle}
                        hintStyle={textFieldStyles.narrowTextFieldStyle.hintStyle}
                        fullWidth={true}
                        underlineShow={false}
                        onChange={this.handleDescriptionRecipientField.bind(this)}
                    /> </Paper>
                </div>
            </div> : null}


            <div className="col-sm-2 col-md-2 details_row__left_area">

                <div >Груз {id}</div>
                { id && id == this.state.cargoList[cargoList.length - 1] ?
                    <div onClick={this.handleCargoUnset.bind(this)}>
                        <div>Отменить</div>
                    </div> :
                    <div className="col-xs-2 col-sm-2 col-md-2"></div> }

            </div>

            <Paper zDepth={1} className="col-xs-12 col-sm-10 col-md-10 white_area">


                <div>
                    <TextField className="col-xs-5 col-sm-5 col-md-5 cell"

                               floatingLabelText="Описание груза"
                               style={textFieldStyles.rootStyle}

                               inputStyle={textFieldStyles.inputStyle}
                               floatingLabelStyle={textFieldStyles.hintStyle}
                               floatingLabelFocusStyle={textFieldStyles.floatingLabelFocusStyle}
                               underlineShow={false} />

                    <Checkbox
                        className="col-xs-3 col-sm-3 col-md-3 inner_cell"
                        style={{ width: 'none' }}

                        label="негабаритный"

                    />

                    <TextField className="col-xs-4 col-sm-4 col-md-4 cell"
                               floatingLabelText="Габариты (ш.в.д.)"
                               style={textFieldStyles.rootStyle}
                               inputStyle={textFieldStyles.inputStyle}
                               floatingLabelStyle={textFieldStyles.hintStyle}
                               floatingLabelFocusStyle={textFieldStyles.floatingLabelFocusStyle}
                               underlineShow={false} />
                </div>

                <div>
                    {this.state.buyout ?
                        <TextField className="col-xs-8 col-sm-8 col-md-8 cell"

                                   floatingLabelText="Стоимость товара"

                                   style={textFieldStyles.rootStyle}
                                   inputStyle={textFieldStyles.inputStyle}
                                   floatingLabelStyle={textFieldStyles.hintStyle}
                                   floatingLabelFocusStyle={textFieldStyles.floatingLabelFocusStyle}
                                   underlineShow={false} />
                        :
                        <div><TextField className="col-xs-4 col-sm-4 col-md-4 cell"

                                        floatingLabelText="К оплате получателем"

                                        style={textFieldStyles.rootStyle}
                                        inputStyle={textFieldStyles.inputStyle}
                                        floatingLabelStyle={textFieldStyles.hintStyle}
                                        floatingLabelFocusStyle={textFieldStyles.floatingLabelFocusStyle}
                                        underlineShow={false} />


                            <TextField className="col-xs-4 col-sm-4 col-md-4 cell"
                                       floatingLabelText="Оценочная стоимость*"
                                       style={textFieldStyles.rootStyle}
                                       inputStyle={textFieldStyles.inputStyle}
                                       floatingLabelStyle={textFieldStyles.hintStyle}
                                       floatingLabelFocusStyle={textFieldStyles.floatingLabelFocusStyle}
                                       underlineShow={false} /></div>}
                    <TextField className="col-xs-4 col-sm-4 col-md-4 cell"
                               floatingLabelText="Вес*"
                               style={textFieldStyles.rootStyle}
                               inputStyle={textFieldStyles.inputStyle}
                               floatingLabelStyle={textFieldStyles.hintStyle}
                               floatingLabelFocusStyle={textFieldStyles.floatingLabelFocusStyle}
                               underlineShow={false} />
                </div>
            </Paper>
        </div>);


        let cargoList = this.state.cargoList;

        const addCargo =
            <div className="row details_row">
                <div className="col-xs-2 col-sm-2 col-md-2"></div>
                <div className=" col-xs-12 col-sm-9 col-md-9 description_area_button"
                     onClick={this.handleOneMoreCargoSet.bind(this)}>+ Еще груз
                </div>
            </div>;

        const additionalOptionsRow =
            <div className="row details_row">
                <div className="col-sm-2 col-md-2 details_row__left_area">
                    Дополнительно
                </div>

                <div className="checkbox__container">

                    <div>
                        <div className="checkbox_item">
                            <Checkbox
                                style={{width: '13%'}}
                                label=""
                                onClick={this.handlePhotoRequire.bind(this)}
                            />
                        </div>

                        <div className="checkbox_label" >фотоподтверждение</div>
                        <img src={hint_img} className="hint" />
                    </div>

                    <div>
                        <div className="checkbox_item">
                            <Checkbox
                                style={{width: '13%'}}
                                label=""

                            />
                        </div>

                        <div className="checkbox_label" >курьеру нужен паспорт</div>
                        <img src={hint_img} className="hint" />
                    </div>

                    <div>
                        <div className="checkbox_item">
                            <Checkbox
                                style={{width: '13%'}}
                                label=""
                                onClick={this.handleCashBackRequire.bind(this)}
                            />
                        </div>

                        <div className="checkbox_label" >потребуется сдача</div>
                        <img src={hint_img} className="hint" />
                    </div>


                    <div>
                        <div className="checkbox_item">
                            <Checkbox
                                style={{width: '13%'}}
                                label=""
                                onClick={this.handleCashBackRequire.bind(this)}
                            />
                        </div>

                        <div className="checkbox_label" >примерка</div>
                        <img src={hint_img} className="hint" />
                    </div>





                    {this.state.photo_requirer ?

                        <div className="col-xs-12 col-sm-10 col-md-10 description_area" style={{height: '30px'}}>
                            <Paper zDepth={1} className="cell"> <TextField
                                className=" "
                                hintText="Опишите что необходимо примерить курьеру"

                                style={textFieldStyles.narrowTextFieldStyle.rootStyle}
                                hintStyle={textFieldStyles.narrowTextFieldStyle.hintStyle}
                                fullWidth={true}
                                underlineShow={false}
                                onChange={this.handleDescriptionRecipientField.bind(this)}
                            /> </Paper>
                        </div> : null} {this.state.cash_back ?

                    <div className="col-xs-12 col-sm-10 col-md-10 description_area" style={{height: '30px'}}>
                        <Paper zDepth={1} className="cell"> <TextField
                            className=" "
                            hintText="Сдача с суммы"

                            style={textFieldStyles.narrowTextFieldStyle.rootStyle}
                            hintStyle={textFieldStyles.narrowTextFieldStyle.hintStyle}
                            fullWidth={true}
                            underlineShow={false}
                            onChange={this.handleDescriptionRecipientField.bind(this)}
                        /> </Paper>
                    </div> : null}
                </div>
            </div>;

        let buttonsRow =
            <div className="buttons">
                <RaisedButton
                    label="Вернуться обратно"
                    labelPosition="before"
                    style={buttonStyles.button}
                    labelStyle={buttonStyles.labelStyle}
                >
                    <div>A &harr; B</div>
                </RaisedButton>

                <RaisedButton
                    label="Добавить точку цепи"
                    labelPosition="before"
                    style={buttonStyles.button}
                    labelStyle={buttonStyles.labelStyle}
                >
                    <div> A &rarr; B  &rarr; C</div>
                </RaisedButton>

                <RaisedButton primary={true}
                              label="Перейти к оплате"
                              labelPosition="before"
                              style={buttonStyles.button}
                              labelStyle={buttonStyles.labelFinalButtonlStyle}
                >

                </RaisedButton>

            </div>;

        // @formatter:off
        return (
            <div>
                <div className="create_delivery_body">
                    {topRow}
                    {senderRow}
                    {recipientRow}
                    <Divider />
                    {deliveryTypeRow}
                    {deliveryTimeRow}
                    <Divider />
                    {specOptionsRow}
                    {cargoDetailsRow()}
                    {cargoList.map(function (cargo, index) {
                        return cargoDetailsRow(cargo);
                    })}
                    {addCargo}
                    <Divider />
                    {additionalOptionsRow}
                </div>
                {buttonsRow}
            </div>);
        //@formatter:on
    }
}