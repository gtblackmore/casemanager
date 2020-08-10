class MatterSerializer < ActiveModel::Serializer
  attributes :id, :plaintiff, :defendant, :case_number, :attorney_id
  belongs_to :attorney
end
