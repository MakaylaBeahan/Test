import React from "react";
import { Select, Form, Input, Button, Upload, InputNumber, Space } from "antd";
import { useAddRecipe } from "../../context/AddRecipeContext";
import "./RecipeForm.scss";
import {
  CloseOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";

function RecipeForm() {
  const {
    normFile,
    onFinish,
    beforeUpload,
    handleImageChange,
    uploadButton,
    form,
    imageUrl,
  } = useAddRecipe();

  return (
    <div>
      <Form
        style={{
          maxWidth: 700,
        }}
        className="recipe-form"
        form={form}
        name="addRecipeForm"
        onFinish={onFinish}
        layout="vertical"
        scrollToFirstError={true}
        initialValues={{
          cookingTime: 0,
          prepTime: 0,
          servings: 0,
          cuisine: "Select Cuisine",
          collection: "Select Collection",
        }}
      >
        {/*Input For Recipe Title */}
        <Form.Item
          label="Recipe Title:"
          name="title"
          className="recipe-title"
          colon={true}
          rules={[
            { required: true, message: "Please input the Recipe Title!" },
          ]}
        >
          <Input
            placeholder="Enter Your Recipe name"
            className="antd-form-input"
          />
        </Form.Item>

        {/*Input For Recipe Image */}
        <Form.Item
          label="Recipe image:"
          name="image"
          getValueFromEvent={normFile}
          valuePropName="fileList"
          noStyle
          className="upload"
        >
          <Upload
            name="avatar"
            accept="image/png, image/jpeg"
            listType="picture"
            className="avatar-uploader"
            showUploadList={true}
            action="https://run.mocky.io/v3/0d7aa6e3-fc01-4a47-893d-7e1cc3013d4e"
            beforeUpload={beforeUpload}
            onChange={handleImageChange}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="avatar"
                style={{
                  height: "200px",
                  objectFit: "fill",
                }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>

        {/*Input For Recipe Description */}
        <Form.Item
          label="Description:"
          name="description"
          rules={[
            { required: true, message: "Please input the Recipe Description!" },
          ]}
        >
          {/* <Input placeholder="Description" className="antd-form-input" /> */}
          <Input.TextArea
            showCount
            maxLength={100}
            placeholder="Introduce your recipe"
            className="antd-form-input"
          />
        </Form.Item>

        {/*Input For Recipe Ingredientss */}
        <Form.Item
          label="Ingredients:"
          name="ingredients"
          rules={[
            { required: true, message: "Please input the Recipe Ingredients!" },
          ]}
        >
          <Form.List name="ingredients">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{
                      display: "flex",
                      marginBottom: 8,
                    }}
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      name={[name, "ingredient"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing Ingredient name",
                        },
                      ]}
                    >
                      <Input placeholder="Add ingredients" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form.Item>

        {/*Input For Recipe Instructions */}
        <Form.Item label="Instructions">
          <Form.List name="instructions">
            {(subFields, subOpt) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: 16,
                }}
              >
                {subFields.map((subField) => (
                  <Space key={subField.key}>
                    <Form.Item noStyle name={[subField.name, "instruction"]}>
                      <Input placeholder="Write Instructions" />
                    </Form.Item>
                    <CloseOutlined
                      onClick={() => {
                        subOpt.remove(subField.name);
                      }}
                    />
                  </Space>
                ))}
                <Button type="dashed" onClick={() => subOpt.add()}>
                  +
                </Button>
              </div>
            )}
          </Form.List>
        </Form.Item>

        {/*Input For Recipe Servings*/}
        <Form.Item
          label="Servings:"
          name="serving"
          rules={[
            { required: true, message: "Please input the Recipe Serving!" },
          ]}
        >
          <Input placeholder="#" className="antd-form-input" />
        </Form.Item>

        {/*Input For Recipe Cooking Time*/}
        <Form.Item
          label="Cooking Time:"
          name="cooking"
          className="cooking-time"
          rules={[
            {
              required: true,
              message: "Please input the Recipe Cooking time!",
            },
          ]}
        >
          <InputNumber
            placeholder="Hours 0"
            className="cooking-time-input antd-form-input"
          />
        </Form.Item>

        {/*Input For Recipe Prep Time*/}
        <Form.Item
          label="Prep Time:"
          name="prep"
          className="prep-time"
          rules={[
            {
              required: true,
              message: "Please input the Recipe Preparation time!",
            },
          ]}
        >
          <InputNumber
            placeholder="Hours 0"
            className="prep-time-input antd-form-input"
          />
        </Form.Item>

        {/*Input For Recipe cuisine*/}
        <Form.Item
          label="Cuisine:"
          name="cuisine"
          rules={[{ required: true, message: "Please select the cuisine!" }]}
        >
          <Select
            // defaultValue={"Italian"}
            placeholder="Italian"
            style={{ width: 200 }}
            className="antd-form-input"
          >
            <Select.Option value="Thai">Thai</Select.Option>
            <Select.Option value="Chinese">Chinese</Select.Option>
            <Select.Option value="Italian">Italian</Select.Option>
          </Select>
        </Form.Item>

        {/*Input For Recipe Nutrition Facts*/}
        <div className="facts">
          <Form.Item
            label="Calories:"
            name="calories"
            rules={[{ required: true, message: "Please enter the calories!" }]}
            className="calories"
          >
            <Input placeholder="#" className="antd-form-input less" />
          </Form.Item>
          <Form.Item
            label="Protiens:"
            name="protiens"
            rules={[{ required: true, message: "Please enter the Protiens!" }]}
          >
            <Input placeholder="#" className="antd-form-input less" />
          </Form.Item>
          <Form.Item
            label="Fats:"
            name="fats"
            rules={[{ required: true, message: "Please enter the Fats!" }]}
          >
            <Input placeholder="#" className="antd-form-input less" />
          </Form.Item>
          <Form.Item
            label="Carbohydrates:"
            name="carbohydrates"
            rules={[
              { required: true, message: "Please enter the Carbohydrates!" },
            ]}
          >
            <Input placeholder="#" className="antd-form-input less" />
          </Form.Item>
          <Form.Item
            label="Fats:"
            name="fats"
            rules={[{ required: true, message: "Please enter the Fats!" }]}
          >
            <Input placeholder="#" className="antd-form-input less" />
          </Form.Item>
          <Form.Item
            label="Protiens:"
            name="protiens"
            rules={[{ required: true, message: "Please enter the Protiens!" }]}
          >
            <Input placeholder="#" className="antd-form-input less" />
          </Form.Item>
          <Form.Item
            label="Calories:"
            name="calories"
            rules={[{ required: true, message: "Please enter the Calories!" }]}
          >
            <Input placeholder="#" className="antd-form-input less" />
          </Form.Item>
          <Form.Item
            label="Carbohydrates:"
            name="carbohydrates"
            rules={[
              { required: true, message: "Please enter the Carbohydrates!" },
            ]}
          >
            <Input placeholder="#" className="antd-form-input less" />
          </Form.Item>
        </div>

        {/*Input For Recipe Collection*/}
        <Form.Item
          label="Collection:"
          name="collection"
          rules={[
            { required: true, message: "Please select the Recipe Collection!" },
          ]}
        >
          <Select
            // defaultValue={"Select Collection"}
            placeholder="Select Collection"
            style={{ width: 200 }}
            className="antd-form-input"
          >
            <Select.Option value="New Collection">New Collection</Select.Option>
            <Select.Option value="Cook Book">Cook Book</Select.Option>
            <Select.Option value="My Recipe">My Recipe</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-primary text-white form-btn"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default RecipeForm;
