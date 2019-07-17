import React, { Component } from "react";
import Indicates from "../components/indicate";
import SelectAddDialog from "../components/selectAddDialog";
import AddBgDialog from "../components/addBgDialog";
import BgNamingDialog from "../components/bgNamingDialog";
import AddAvDialog from "../components/addAvDialog";
import PreviewDialog from "../components/previewDialog";

class Indicate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag_selectAdd: false,
      flag_addBg: false,
      flag_bgNaming: false,
      flag_addAv: false,
      imageData: null,
      imageWidth: null,
      imageHeight: null,
      judg: true,
      textValue: "",
      errorText: "",
      judgNaming: true,
      previewData: null,
      judgPreview: false,
      alignment: "bottomRight",
      voiceTextValue: ""
    };
  }

  handleClickFlag_selectAdd() {
    this.setState({
      flag_selectAdd: !this.state.flag_selectAdd
    });
  }
  handleClickFlag_AddBg() {
    this.setState({
      flag_addBg: !this.state.flag_addBg
    });
  }
  handleClickFlag_BgNaming() {
    this.setState({
      flag_bgNaming: !this.state.flag_bgNaming
    });
  }
  handleClickFlag_AddAv() {
    this.setState({
      flag_addAv: !this.state.flag_addAv
    });
  }
  handleClickFlag_Preview() {
    this.setState({
      judgPreview: !this.state.judgPreview
    });
  }

  onFileChange(e) {
    const files = e.target.files;
    if (files.length > 0) {
      var file = files[0];
      var image = new Image();
      var reader = new FileReader();
      reader.onload = e => {
        image.onload = () => {
          this.setState({
            imageWidth: image.width,
            imageHeight: image.height
          });
        };
        image.src = e.target.result;
        this.setState({
          imageData: e.target.result
        });
      };
      reader.readAsDataURL(file);
      this.handleClickFlag_selectAdd();
      this.handleClickFlag_AddBg();
    } else {
      this.setState({ imageData: null });
    }
  }
  cropImage = cropperRef => {
    if (typeof cropperRef.getCroppedCanvas() === "undefined") {
      return;
    }
    this.setState({
      cropResult: cropperRef.getCroppedCanvas().toDataURL()
    });

    this.handleClickFlag_BgNaming();
  };

  onChangeText = e => {
    //a-zａ-ｚA-ZＡ-Ｚ0-9０-９ぁ-んァ-ン一-龥_-_
    //アルファベット, ひらがな, カタカナ,　漢字, _(半角アンダーバー)以外は使用できません
    if (
      e.target.value.match(/^(?=.*[!-\/:-@\[-`{-~]).*$/) !== null &&
      e.target.value.length !== 0
    ) {
      this.setState({
        errorText: "半角記号は使用できません",
        judgNaming: true
      });
    } else if (e.target.value.length === 0) {
      this.setState({
        errorText: "",
        judgNaming: true
      });
    } else {
      this.setState({
        errorText: "",
        judgNaming: false
      });
    }
    this.setState({
      textValue: e.target.value
    });
  };

  checkError(textValue) {
    if (!textValue.replace(/\s+/g, "").replace(/[\r\n]+/g, "").length) {
      this.setState({
        errorText: "空白のみになっています。"
      });
      return true;
    } else if (textValue.length > 25) {
      this.setState({
        errorText: "画像の名前は25文字以下にしてください。"
      });
      return true;
    } else {
      this.setState({
        judgNaming: true,
        errorText: "",
        textValue: ""
      });
      return false;
    }
  }

  onPreview(previewData) {
    this.setState({
      previewData: previewData,
      judgPreview: true
    });
  }

  onChangeVoiceText = e => {
    this.setState({
      voiceTextValue: e.target.value
    });
  }

  checkErrorAv(voiceTextValue) {
    if (!voiceTextValue.replace(/\s+/g, "").replace(/[\r\n]+/g, "").length) {
      this.setState({
        //errorText: "空白のみになっています。"
      });
      return true;
    } else if (voiceTextValue.length > 25) {
      this.setState({
        //errorText: "話させたいことは25文字以下にしてください。"
      });
      return true;
    } else {
      this.setState({
        //judgNaming: true,
        //errorText: "",
        alignment: "bottomRight",
        voiceTextValue: ""
      });
      return false;
    }
  }

  handleAlignment = (e, newAlignment) => {
    this.setState({
      alignment: newAlignment
    });
  }

  render() {
    return (
      <div className="">
        <SelectAddDialog
          open={this.state.flag_selectAdd}
          onClose={() => {
            this.handleClickFlag_selectAdd();
          }}
          onFileChange={e => {
            this.onFileChange(e);
          }}
          onAddAv={() => {
            this.handleClickFlag_selectAdd();
            this.handleClickFlag_AddAv();
          }}
        />
        <AddBgDialog
          open={this.state.flag_addBg}
          imageData={this.state.imageData}
          imageWidth={this.state.imageWidth}
          imageHeight={this.state.imageHeight}
          onClose={() => {
            this.handleClickFlag_AddBg();
          }}
          handleClose={cropperRef => {
            this.cropImage(cropperRef.current);
            //this.props.addElement();
          }}
        />
        <BgNamingDialog
          open={this.state.flag_bgNaming}
          onClose={() => {
            //this.handleClickFlag_BgNaming();
            //this.handleClickFlag_AddBg();
          }}
          onChange={e => this.onChangeText(e)}
          onDecide={() => {
            if (this.checkError(this.state.textValue)) {
              return;
            }
            this.handleClickFlag_AddBg();
            this.handleClickFlag_BgNaming();
            this.props.onDecide(
              this.state.cropResult,
              this.state.textValue
                .replace(/^\s+/g, "_")
                .replace(/\s+/g, " ")
                .replace(/_/g, "")
            );
          }}
          errorText={this.state.errorText}
          judgNaming={this.state.judgNaming}
        />
        <AddAvDialog
          open={this.state.flag_addAv}
          onClose={() => {
            this.setState({
              alignment: "bottomRight",
              voiceTextValue: ""
            });
            this.handleClickFlag_AddAv();
          }}
          handleAlignment={(e, newAlignment) => {
            this.handleAlignment(e, newAlignment);
          }}
          alignment={this.state.alignment}
          onChange={(e) => {
            this.onChangeVoiceText(e)
          }}
          handleClose={() => {
            if (this.checkErrorAv(this.state.voiceTextValue)) {
              return;
            }
            this.props.onDecideAv(
              this.state.alignment,
              this.state.voiceTextValue
            );
            this.handleClickFlag_AddAv();
          }}
        />
        <PreviewDialog
          open={this.state.judgPreview}
          onClose={() => {
            this.handleClickFlag_Preview();
          }}
          previewData={this.state.previewData}
        />
        <Indicates
          elements={this.props.elements}
          addClick={e => {
            //this.props.addClick(e);
            this.handleClickFlag_selectAdd();
          }}
          onPreview={previewData => this.onPreview(previewData)}
        />
      </div>
    );
  }
}

export default Indicate;
