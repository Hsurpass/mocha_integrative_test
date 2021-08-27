:: protoc.exe 放在3rd-party\bin 目录下，version: 3.1.0

protoc.exe --js_out=import_style=commonjs,binary:. adasData.proto
protoc.exe --js_out=import_style=commonjs,binary:. basicTypes.proto
protoc.exe --js_out=import_style=commonjs,binary:. cameraList.proto
protoc.exe --js_out=import_style=commonjs,binary:. hadData.proto
protoc.exe --js_out=import_style=commonjs,binary:. highwayGuide.proto
protoc.exe --js_out=import_style=commonjs,binary:. laneModel.proto
protoc.exe --js_out=import_style=commonjs,binary:. maneuver.proto
protoc.exe --js_out=import_style=commonjs,binary:. reminder.proto
protoc.exe --js_out=import_style=commonjs,binary:. route.proto
protoc.exe --js_out=import_style=commonjs,binary:. routingResponse.proto