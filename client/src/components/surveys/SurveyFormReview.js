import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions/index';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please Confirm Your Entries</h5>
            {reviewFields}
            <button className="yellow darken-3 white-text btn-flat"
                onClick={onCancel}>
                Back
            </button>
            <button onClick={() => submitSurvey(formValues, history)} className="green btn-flat right white-text">
                Send
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { formValues: state.form.surveyForm.values }
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));