import React, { useCallback, useState, useMemo } from "react";
import { useForm } from "react-hook-form";

import ArrayInputs from "Components/ArrayInputs";
import Button from "Components/Button";
import Image from "Components/Image";
import Radio from "Components/Radio";
import Textarea from "Components/Textarea";
import TextInput from "Components/TextInput";

import { removeNonNumeric } from "Utils/String";

import { AllLangs, AllLangsOptions } from "Assets/Languages";
import Form from "Assets/Languages/Form";

import { Container, Header, FormContainer, ButtonContainer } from "./style";

type AllowedCurrencies = "USD" | "BRL" | "EUR";

const currencyOptions = [
  {
    name: "USD ($)",
    value: "USD",
  },
  {
    name: "BRL (R$)",
    value: "BRL",
  },
  {
    name: "EUR (€)",
    value: "EUR",
  },
];

const View: React.FC = () => {
  const { register, handleSubmit, setValue, errors } = useForm();
  const [language, setLanguage] = useState<AllLangsOptions>("EN");
  const [currency, setCurrency] = useState<AllowedCurrencies>("USD");
  const [profilePicture, setProfilePicture] = useState<string>("");
  const [skills, setSkills] = useState<Array<string>>([""]);

  const onSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

  const formatAge = useCallback(
    (age: string) => {
      let formatted = removeNonNumeric(age);

      if (formatted.length > 3) {
        formatted = formatted.substr(0, 3);
      }

      setValue("age", formatted);
    },
    [setValue],
  );

  const getLanguagesOptions = useMemo(() => {
    const allLangsOptions = [];

    for (const lang in AllLangs) {
      allLangsOptions.push({
        name: AllLangs[lang as AllLangsOptions],
        value: lang,
      });
    }

    return allLangsOptions;
  }, []);

  const changeSkillValue = useCallback(
    (index: number, value: string) => {
      const newSkills = skills.slice();

      newSkills[index] = value;

      setSkills(newSkills);
    },
    [skills],
  );

  const addSkill = useCallback(() => {
    const newSkills = skills.slice();

    newSkills.push("");

    setSkills(newSkills);
  }, [skills]);

  const removeSkill = useCallback(
    (index: number) => {
      const newSkills = skills.slice();

      newSkills.splice(index, 1);

      setSkills(newSkills);
    },
    [skills],
  );

  return (
    <Container>
      <Header>{Form[language].reactResumeGenerator}</Header>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Radio
          label={Form[language].language}
          name="language"
          value={language}
          onChange={e => setLanguage(e.target.value as AllLangsOptions)}
          options={getLanguagesOptions}
        />
        <Radio
          label={Form[language].currency}
          name="currency"
          value={currency}
          onChange={e => setCurrency(e.target.value as AllowedCurrencies)}
          options={currencyOptions}
        />
        <Image
          label={Form[language].profilePicture}
          buttonLabel={Form[language].uploadFile}
          buttonEditLabel={Form[language].buttonEdit}
          buttonRemoveLabel={Form[language].buttonRemove}
          buttonSelectLabel={Form[language].buttonSelect}
          value={profilePicture}
          setValue={setProfilePicture}
        />
        <TextInput
          isRequired
          label={Form[language].name}
          name="name"
          innerRef={register({
            required: true,
          })}
          errorMessage={errors.name && "This Field Is Required."}
        />
        <TextInput
          isRequired
          label={Form[language].headline}
          name="headline"
          innerRef={register({
            required: true,
          })}
          errorMessage={errors.name && "This Field Is Required."}
        />
        <TextInput
          label={Form[language].age}
          name="age"
          onChange={e => formatAge(e.target.value)}
          innerRef={register()}
        />
        <TextInput
          label={Form[language].graduation}
          name="gaduation"
          innerRef={register()}
        />
        <Textarea
          isRequired
          label={Form[language].about}
          name="about"
          innerRef={register({
            required: true,
          })}
          errorMessage={errors.name && "This Field Is Required."}
        />
        <TextInput
          label={Form[language].salaryExpectation}
          name="salaryExpectation"
          onChange={e =>
            setValue("salaryExpectation", removeNonNumeric(e.target.value))
          }
          innerRef={register()}
        />
        <ArrayInputs
          label={Form[language].competences}
          inputs={skills}
          setValue={changeSkillValue}
          removeField={removeSkill}
          addField={addSkill}
        />
        <ButtonContainer>
          <Button aria-label="submit">{Form[language].submit}</Button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
};

export default View;
