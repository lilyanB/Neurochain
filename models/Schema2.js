const mongoose = require('mongoose');


const PostSchema2 = mongoose.Schema({
  "_id": {
    "type": "ObjectId",
    "properties": {
      "$oid": {
        "type": "string"
      }
    },
    "required": [
      "$oid"
    ]
  },
  "transaction": {
    "type": "object",
    "properties": {
      "id": {
        "type": "object",
        "properties": {
          "data": {
            "type": "string"
          }
        },
        "required": [
          "data"
        ]
      },
      "outputs": {
        "type": "array",
        "items": [
          {
            "type": "object",
            "properties": {
              "keyPub": {
                "type": "object",
                "properties": {
                  "rawData": {
                    "type": "string"
                  }
                },
                "required": [
                  "rawData"
                ]
              },
              "value": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string"
                  }
                },
                "required": [
                  "value"
                ]
              },
              "data": {
                "type": "string"
              }
            },
            "required": [
              "keyPub",
              "value",
              "data"
            ]
          },
          {
            "type": "object",
            "properties": {
              "keyPub": {
                "type": "object",
                "properties": {
                  "rawData": {
                    "type": "string"
                  }
                },
                "required": [
                  "rawData"
                ]
              },
              "value": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string"
                  }
                },
                "required": [
                  "value"
                ]
              },
              "data": {
                "type": "string"
              }
            },
            "required": [
              "keyPub",
              "value",
              "data"
            ]
          },
          {
            "type": "object",
            "properties": {
              "keyPub": {
                "type": "object",
                "properties": {
                  "rawData": {
                    "type": "string"
                  }
                },
                "required": [
                  "rawData"
                ]
              },
              "value": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string"
                  }
                },
                "required": [
                  "value"
                ]
              },
              "data": {
                "type": "string"
              }
            },
            "required": [
              "keyPub",
              "value",
              "data"
            ]
          },
          {
            "type": "object",
            "properties": {
              "keyPub": {
                "type": "object",
                "properties": {
                  "rawData": {
                    "type": "string"
                  }
                },
                "required": [
                  "rawData"
                ]
              },
              "value": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string"
                  }
                },
                "required": [
                  "value"
                ]
              },
              "data": {
                "type": "string"
              }
            },
            "required": [
              "keyPub",
              "value",
              "data"
            ]
          },
          {
            "type": "object",
            "properties": {
              "keyPub": {
                "type": "object",
                "properties": {
                  "rawData": {
                    "type": "string"
                  }
                },
                "required": [
                  "rawData"
                ]
              },
              "value": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string"
                  }
                },
                "required": [
                  "value"
                ]
              },
              "data": {
                "type": "string"
              }
            },
            "required": [
              "keyPub",
              "value",
              "data"
            ]
          },
          {
            "type": "object",
            "properties": {
              "keyPub": {
                "type": "object",
                "properties": {
                  "rawData": {
                    "type": "string"
                  }
                },
                "required": [
                  "rawData"
                ]
              },
              "value": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string"
                  }
                },
                "required": [
                  "value"
                ]
              },
              "data": {
                "type": "string"
              }
            },
            "required": [
              "keyPub",
              "value",
              "data"
            ]
          },
          {
            "type": "object",
            "properties": {
              "keyPub": {
                "type": "object",
                "properties": {
                  "rawData": {
                    "type": "string"
                  }
                },
                "required": [
                  "rawData"
                ]
              },
              "value": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string"
                  }
                },
                "required": [
                  "value"
                ]
              },
              "data": {
                "type": "string"
              }
            },
            "required": [
              "keyPub",
              "value",
              "data"
            ]
          },
          {
            "type": "object",
            "properties": {
              "keyPub": {
                "type": "object",
                "properties": {
                  "rawData": {
                    "type": "string"
                  }
                },
                "required": [
                  "rawData"
                ]
              },
              "value": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string"
                  }
                },
                "required": [
                  "value"
                ]
              },
              "data": {
                "type": "string"
              }
            },
            "required": [
              "keyPub",
              "value",
              "data"
            ]
          },
          {
            "type": "object",
            "properties": {
              "keyPub": {
                "type": "object",
                "properties": {
                  "rawData": {
                    "type": "string"
                  }
                },
                "required": [
                  "rawData"
                ]
              },
              "value": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string"
                  }
                },
                "required": [
                  "value"
                ]
              },
              "data": {
                "type": "string"
              }
            },
            "required": [
              "keyPub",
              "value",
              "data"
            ]
          },
          {
            "type": "object",
            "properties": {
              "keyPub": {
                "type": "object",
                "properties": {
                  "rawData": {
                    "type": "string"
                  }
                },
                "required": [
                  "rawData"
                ]
              },
              "value": {
                "type": "object",
                "properties": {
                  "value": {
                    "type": "string"
                  }
                },
                "required": [
                  "value"
                ]
              },
              "data": {
                "type": "string"
              }
            },
            "required": [
              "keyPub",
              "value",
              "data"
            ]
          }
        ]
      },
      "lastSeenBlockId": {
        "type": "object",
        "properties": {
          "data": {
            "type": "string"
          }
        },
        "required": [
          "data"
        ]
      }
    },
    "required": [
      "id",
      "outputs",
      "lastSeenBlockId"
    ]
  },
  "isCoinbase": {
    "type": "boolean"
  },
  "blockId": {
    "type": "object",
    "properties": {
      "data": {
        "type": "string"
      }
    }
  }
},
{
  collection: "tx"
}
);

module.exports = mongoose.model('tx', PostSchema2);