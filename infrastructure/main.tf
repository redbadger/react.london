variable aws_access_key {}
variable aws_secret_key {}

provider "aws" {
  region = "eu-west-1"
  access_key = "${var.aws_access_key}"
  secret_key = "${var.aws_secret_key}"
}

variable s3_bucket_name {
  default = "staging.react.london"
}

resource "aws_s3_bucket" "website" {
  provider = "aws"

  bucket = "${var.s3_bucket_name}"
  acl = "public-read"
  policy = <<POLICY
  {
    "Version": "2012-10-17",
    "Statement": [
      {
	"Sid": "PublicReadGetObject",
	"Effect": "Allow",
	"Principal": "*",
	"Action": "s3:GetObject",
	"Resource": "arn:aws:s3:::${var.s3_bucket_name}/*"
      }
    ]
  }
  POLICY

  website {
    index_document = "index.html"
    error_document = "index.html" # Handle 404 errors in JS app
  }
}

resource "aws_iam_user" "staging-editor" {
  name = "staging-editor.react.london"
}

resource "aws_iam_access_key" "staging-editor" {
  user = "${aws_iam_user.staging-editor.name}"
}

resource "aws_iam_user_policy" "staging-editor" {
  name = "test"
  user = "${aws_iam_user.staging-editor.name}"
  policy = <<EOF
  {
    "Statement": [
      {
	"Action": [
	  "s3:*"
	],
	"Effect": "Allow",
	"Resource": [
	  "arn:aws:s3:::${aws_s3_bucket.website.bucket}",
	  "arn:aws:s3:::${aws_s3_bucket.website.bucket}/*"
	]
      }
    ]
  }
  EOF
}
