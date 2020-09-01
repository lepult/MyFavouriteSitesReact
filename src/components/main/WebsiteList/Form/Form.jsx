import React, { useState, useEffect } from 'react';
import { Input, Accordion, TextArea, Button } from 'chayns-components/lib';

import './Form.scss';

function Form() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [areaCode, setAreaCode] = useState();
    const [city, setCity] = useState();
    const [street, setStreet] = useState();
    const [email, setEmail] = useState();
    const [link, setLink] = useState();
    const [comment, setComment] = useState();

    function submitForm() {
        chayns.intercom.sendMessageToPage({
            text: `Name: ${firstName} ${lastName} \nEmail: ${email} \nAdresse: ${street} ${areaCode} ${city} \nSeite: ${link} \n${comment}`,
        }).then((data) => {
            if (data.status === 200) {
                chayns.dialog.alert('', 'Wir haben Deine Anfrage erhalten.').then(console.log);

                setAreaCode('');
                setCity('');
                setStreet('');
                setEmail('');
                setLink('');
                setComment('');
            }
        });
    }
    function loginAndSubmit() {
        chayns.addAccessTokenChangeListener(() => {
            console.log('login successful');
            submitForm();
        });
        chayns.login();
    }
    function fillInUserData() {
        if (chayns.env.user.isAuthenticated) {
            setFirstName(chayns.env.user.firstName);
            setLastName(chayns.env.user.lastName);
        }
    }

    useEffect(() => {
        fillInUserData();
    }, []);


    return (
        <Accordion head="Deine Seite fehlt">
            <form className="accordion__content formContainer">

                <div className="formHeader" style={{ marginTop: '10px' }}>Name</div>
                <Input
                    value={firstName}
                    onChange={setFirstName}
                    className="formItem formItemWide"
                    placeholder="Vorname"
                    name="firstName"
                    dynamic
                    required
                />
                <Input
                    value={lastName}
                    onChange={setLastName}
                    className="formItem formItemWide"
                    placeholder="Nachname"
                    name="lastName"
                    dynamic
                    required
                />

                <div className="formHeader">Adresse</div>
                <Input
                    value={areaCode}
                    onChange={setAreaCode}
                    className="formItem formItemPLZ"
                    placeholder="PLZ"
                    name="areaCode"
                    dynamic
                />
                <Input
                    value={city}
                    onChange={setCity}
                    className="formItem formItemStadt"
                    placeholder="Stadt"
                    name="city"
                    dynamic
                />
                <Input
                    value={street}
                    onChange={setStreet}
                    className="formItem formItemWide"
                    placeholder="Straße/Hausnummer"
                    name="street"
                    dynamic
                />
                <Input
                    value={email}
                    onChange={setEmail}

                    className="formItem formItemWide"
                    placeholder="E-Mail"
                    name="eMail"
                    dynamic
                    required
                />

                <div className="formHeader">Deine Seite</div>
                <Input
                    value={link}
                    onChange={setLink}
                    className="formItem formItemWide"
                    placeholder="Link"
                    name="link"
                    dynamic
                    required
                />
                <TextArea
                    value={comment}
                    onChange={setComment}
                    className="formItem formItemWide"
                    placeholder="Anmerkungen"
                    name="comment"
                />

                {/* eslint-disable-next-line no-nested-ternary */}
                {firstName && lastName && email && link
                    ? chayns.env.user.isAuthenticated
                        ? <Button className="formButton" onClick={submitForm}>Senden!</Button>
                        : <Button className="formButton" onClick={loginAndSubmit}>Senden!</Button>
                    : <Button className="formButton grey">Senden!</Button>}
            </form>
        </Accordion>

    );
}

export default Form;
