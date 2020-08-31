import React from 'react';
import { Input } from 'chayns-components/lib';

import './Form.scss';

function Form() {
    return (
        <div className="formContainer">
            <div className="formHeader">Name</div>
            <Input className="formItem" placeholder="Vorname"/>
            <Input className="formItem" placeholder="Nachname"/>
            <div className="formHeader">Adresse</div>
            <Input className="formItemPLZ" placeholder="PLZ"/>
            <Input className="formItemStadt" placeholder="Stadt"/>
            <Input className="formItem" placeholder="Straße/Hausnummer"/>
            <Input className="formItem" placeholder="E-Mail"/>
            <div className="formHeader">Deine Seite</div>
            <Input className="formItem" placeholder="Link"/>
            <textarea className="input textInp formItem" placeholder="Anmerkungen"/>

        </div>
    );
}

export default Form;
