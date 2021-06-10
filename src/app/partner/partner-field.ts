import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { PartnerApi } from 'src/app/partner/partner.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class PartnerField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/partner',
      Permissions.values.partnerRead,
      PartnerApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.title,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/partner',
      Permissions.values.partnerRead,
      PartnerApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.title,
        };
      },
      options,
    );
  }
}
